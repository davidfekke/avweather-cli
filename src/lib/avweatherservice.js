const axios = require('axios')
const parser = require('fast-xml-parser')

class AVWeatherService {
  async getMETAR(icao) {
    const xml = await axios.get(`https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=${icao}&hoursBeforeNow=2`)
    const jsonObj = parser.parse(xml.data)
    if (jsonObj.response.data.METAR.length > 0) {
      return jsonObj.response.data
    }
    return jsonObj.response
  }

  async getTAF(icao) {
    const xml = await axios.get(`https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&stationString=${icao}&hoursBeforeNow=4`)
    const jsonObj = parser.parse(xml.data)
    return jsonObj.response.data
  }
}

module.exports = AVWeatherService
