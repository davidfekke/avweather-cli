const {Command, flags} = require('@oclif/command')
const AVWeatherService = require('../lib/avweatherservice.js')

class TafCommand extends Command {
  async run() {
    const {flags} = this.parse(TafCommand)
    const airport = flags.airport || 'KDAB'
    const AVWeather = new AVWeatherService()
    const weather = await AVWeather.getTAF(airport)
    this.log(`Terminal area forcast information for airport ${airport}`)
    this.log(weather)
  }
}

TafCommand.description = `This command is used to display current TAF information for your airport
...
Simply use the ICAO identifier for your airport.
`

TafCommand.flags = {
  airport: flags.string({char: 'a', description: 'name to print'}),
}

module.exports = TafCommand
