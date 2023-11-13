import { Args, Command, Flags } from '@oclif/core';

import { getMetar } from '../lib/weatherservice.js';

interface IMetar {
  altim_in_hg: string;
  dewpoint_c: string;
  elevation_m: string;
  flight_category: string;
  latitude: string;
  longitude: string;
  observation_time: string;
  precip_in: string;
  raw_text: string;
  sea_level_pressure_mb: string;
  sky_condition: ISkyCondition[];
  station_id: string;
  temp_c: string;
  visibility_statute_mi: string;
  wind_dir_degrees: string;
  wind_gust_kt: string;
  wind_speed_kt: string;
}

interface ISkyCondition {
  cloud_base_ft_agl: string;
  sky_cover: string;
}
  
export default class Metar extends Command {
  static args = {
    icaoId: Args.string({description: 'Identifier for reporting station'}),
  }

  static flags = {
    raw: Flags.boolean({char: 'f', summary: 'Raw Report', description: 'Just show the raw metar report.'})
  }

  static description = 'describe the command here';
  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Metar);
    const identifier: string = args.icaoId ?? 'kcrg';
    const metarData = await getMetar(identifier);
    const obs = metarData as unknown as IMetar[];
    const observation = obs[0];

    if (obs.length > 0 && flags.raw) { // 
      this.log(`Metar information for airport ${observation.station_id}`);
      this.log(observation.raw_text)
    } else if (obs.length > 1 && !flags.raw) { 
      this.log(`Metar information for airport ${observation.station_id}`);
      this.log(`STATION ID: ${observation.station_id}`);
      this.log(`OBSERVATION TIME: ${observation.observation_time}`);
      this.log(`LATITUDE: ${observation.latitude} LONGITUDE ${observation.longitude}`);
      this.log(`TEMP CELSIUS: ${observation.temp_c}`);
      this.log(`DEWPOINT: ${observation.dewpoint_c}`);
      this.log(`WIND DIRECTION: ${observation.wind_dir_degrees}`);
      this.log(`WIND SPEED: ${observation.wind_speed_kt}`);
      if (observation.wind_gust_kt) {
        this.log(`WIND GUST: ${observation.wind_gust_kt}`);
      }

      this.log(`VISIBILITY: ${observation.visibility_statute_mi}`);
      const altim = new Number(observation.altim_in_hg);
      this.log(`ALTIMETER: ${altim.toFixed(2)}`);
      if (observation.sea_level_pressure_mb !== undefined) {
        this.log(`SEA LEVEL PRESSURE: ${observation.sea_level_pressure_mb}`);
      }

      switch (observation.flight_category) {
        case 'VFR': {
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        }

        case 'MVFR': {
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        }

        case 'IFR': {
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        }

        case 'LIFR': {
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        }

        default: {
          this.log(`FLIGHT CATEGORY: N/A`);
        }
      }

      for (const sky of observation.sky_condition) {
        this.log(`  SKY CONDITION: ${sky.sky_cover}`);
        if (sky.cloud_base_ft_agl !== undefined) {
          this.log(`  SKY LAYER: ${sky.cloud_base_ft_agl}`);
        }
      }

      if (observation.precip_in !== undefined) {
        this.log(`PRECIPITATION: ${observation.precip_in}`);
      }

      this.log(`ELEVATION (METERS): ${observation.elevation_m}`);
  }
}
}
