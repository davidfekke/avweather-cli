const axios = require('axios')

class AVWeatherService {
  async getMETAR(icao) {
    try {
      const response = await axios.get(`https://avwx.fekke.com/metar/${icao}`)
      const jsonObj = response.data
      return jsonObj
    } catch (error) {
      //console.log(error)
      return []
    }
  }

  async getTAF(icao) {
    const response = await axios.get(`https://avwx.fekke.com/taf/${icao}`)
    const jsonObj = response.data
    return jsonObj
  }
}

module.exports = AVWeatherService
