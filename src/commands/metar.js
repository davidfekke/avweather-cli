const {Command, flags} = require('@oclif/command')
const AVWeatherService = require('../lib/avweatherservice.js')
// const chalk = require('chalk');

class MetarCommand extends Command {
  async run() {
    const {args, flags} = this.parse(MetarCommand)
    let airport = args.icaoidentifier || 'KDAB'
    airport = flags.airport || airport
    const AVWeather = new AVWeatherService()
    const weather = await AVWeather.getMETAR(airport)
    this.log(`Metar information for airport ${airport}`)
    if (weather.length > 1 && flags.raw) {
      this.log(weather[0].raw_text)
    } else {
      const observation = weather[0];
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
      let altim = new Number(observation.altim_in_hg);
      this.log(`ALTIMETER: ${altim.toFixed(2)}`);
      this.log(`SEA LEVEL PRESSURE: ${observation.sea_level_pressure_mb}`);
      switch (observation.flight_category) {
        case 'VFR':
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        case 'MVFR':
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        case 'IFR':
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        case 'LIFR':
          this.log(`FLIGHT CATEGORY: ${observation.flight_category}`);
          break;
        default:
          this.log(`FLIGHT CATEGORY: N/A`);
      }
      observation.sky_condition.forEach(sky => {
        this.log(`SKY CONDITION: ${sky.sky_cover}`);
        this.log(`SKY LAYER: ${sky.cloud_base_ft_agl}`);
      });
      this.log(`PRECIPITATION: ${observation.precip_in}`);
      this.log(`ELEVATION (METERS): ${observation.elevation_m}`);
    }
  }
}

MetarCommand.description = `This command is used to display current METAR information for your airport
...
Simply use the ICAO identifier for your airport.
`
MetarCommand.args = [
  {name: 'icaoidentifier'}
]

MetarCommand.flags = {
  airport: flags.string({char: 'a', description: 'name to print'}),
  raw: flags.boolean({char: 'r', description: 'Raw text for the METAR'}),
}

module.exports = MetarCommand
