const {Command, flags} = require('@oclif/command')
const AVWeatherService = require('../lib/avweatherservice.js')

/*
Sample output for each item in the array:
fcst_time_from: '2021-12-21T15:00:00Z',
  fcst_time_to: '2021-12-21T17:00:00Z',
  change_indicator: 'FM',
  wind_dir_degrees: '140',
  wind_speed_kt: '11',
  wind_gust_kt: '18',
  visibility_statute_mi: '4.0',
  wx_string: 'SHRA VCTS',
  sky_condition: [
    { sky_cover: 'SCT', cloud_base_ft_agl: '600', cloud_type: 'CB' },
    { sky_cover: 'OVC', cloud_base_ft_agl: '1500' }
  ]
*/
class TafCommand extends Command {
  async run() {
    const {args, flags} = this.parse(TafCommand)
    let airport = args.icaoidentifier || 'KDAB'
    airport = flags.airport || airport
    const AVWeather = new AVWeatherService()
    const weather = await AVWeather.getTAF(airport)
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
            this.log(`  SKY CONDITION: ${sky.sky_cover}`);
            if (sky.cloud_base_ft_agl !== undefined) {
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

TafCommand.args = [{name: 'icaoidentifier'}]


TafCommand.description = `This command is used to display current TAF information for your airport
...
Simply use the ICAO identifier for your airport.
`

TafCommand.flags = {
  airport: flags.string({char: 'a', description: 'name to print'}),
  raw: flags.boolean({char: 'r', description: 'Print raw text of TAF'}),
}

module.exports = TafCommand
