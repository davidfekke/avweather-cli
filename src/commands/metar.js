const {Command, flags} = require('@oclif/command')
const AVWeatherService = require('../lib/avweatherservice.js')

class MetarCommand extends Command {
  async run() {
    const {flags} = this.parse(MetarCommand)
    const airport = flags.airport || 'KDAB'
    const AVWeather = new AVWeatherService()
    const weather = await AVWeather.getMETAR(airport)
    this.log(`Metar information for airport ${airport}`)
    this.log(weather)
  }
}

MetarCommand.description = `This command is used to display current METAR information for your airport
...
Simply use the ICAO identifier for your airport.
`

MetarCommand.flags = {
  airport: flags.string({char: 'a', description: 'name to print'}),
}

module.exports = MetarCommand
