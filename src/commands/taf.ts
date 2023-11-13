import {Args, Command, Flags} from '@oclif/core';

import { getTaf } from '../lib/weatherservice.js';

interface ITaf {
  raw_text: string;
  station_id: string;
  forecast: IForecast[];
}

interface IForecast {
  precip_in: string | undefined;
  fcst_time_from: string;
  fcst_time_to: string;
  change_indicator: string;
  wind_dir_degrees: string;
  wind_speed_kt: string;
  wind_gust_kt: string;
  visibility_statute_mi: string;
  wx_string: string;
  sky_condition: ISkyCondition[];
}

interface ISkyCondition {
  cloud_base_ft_agl: string;
  sky_cover: string;
}

export default class Taf extends Command {
  static description = 'Get terminal area forecasts'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = {
    icaoId: Args.string({description: 'Identifier for reporting station'})
  }

  static flags = {
    raw: Flags.boolean({char: 'f', summary: 'Raw Report', description: 'Just show the raw TAF report.'})
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Taf)
    const identifier: string = args.icaoId ?? 'KDAB';
    const tafData = await getTaf(identifier);
    
    const weather = tafData as unknown as ITaf[];
    if (weather.length > 1) {
      const currentForecast = weather[0];
      this.log(`Terminal area forecast information for airport ${currentForecast.station_id}`);
      if (flags.raw) {
        this.log(currentForecast.raw_text)
      } else {
        currentForecast.forecast.forEach(forecast => {
          this.log(`FORECAST FROM: ${forecast.fcst_time_from}`);
          this.log(`FORECAST TO: ${forecast.fcst_time_to}`);
          if (forecast.change_indicator !== undefined) {
            this.log(`CHANGE INDICATOR: ${forecast.change_indicator}`);
          }
          this.log(`WIND DIRECTION: ${forecast.wind_dir_degrees}`);
          this.log(`WIND SPEED: ${forecast.wind_speed_kt}`);
          if (forecast.wind_gust_kt) {
            this.log(`WIND GUST: ${forecast.wind_gust_kt}`);
          }
          this.log(`VISIBILITY: ${forecast.visibility_statute_mi}`);

          if (forecast.wx_string !== undefined) {
            this.log(`WEATHER: ${forecast.wx_string}`);
          }
          forecast.sky_condition.forEach(sky => {
            if (sky !== null && sky.sky_cover !== undefined) {
              this.log(`  SKY COVER: ${sky.sky_cover}`);
            }
            if (sky !== null && sky.cloud_base_ft_agl !== undefined) {
              this.log(`  SKY LAYER: ${sky.cloud_base_ft_agl}`);
            }
          });
          if (forecast.precip_in !== undefined) {
            this.log(`PRECIPITATION: ${forecast.precip_in}`);
          }
          this.log('')
        });
      }
    }
  }
}
