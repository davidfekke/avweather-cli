const {Command, flags} = require('@oclif/command')
const AVWeatherService = require('../lib/avweatherservice.js')

class MetarCommand extends Command {
  async run() {
    const {args, flags} = this.parse(MetarCommand)
    let airport = args.icaoidentifier || 'KDAB'
    airport = flags.airport || airport
    const AVWeather = new AVWeatherService()
    const weather = await AVWeather.getMETAR(airport)
    this.log(`Metar information for airport ${airport}`)
    if (weather.METAR.length > 1 && flags.raw) {
      this.log(weather.METAR[0].raw_text)
    } else {
      this.log(weather.METAR[0])
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
