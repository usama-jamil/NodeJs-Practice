const request = require("request");

const accuWeatherKey = "mWW36XM9XBprnpfIZCKovK5GKL3HoB2i";
// const accuWeatherKey = "pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF";
const citySearch = (geoRes, send ,callback) => {
  const searchCityUrl = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuWeatherKey}&q=${geoRes.latitude}%2C${geoRes.longitude}`;

  request({ url: searchCityUrl, json: true }, (err, res) => {
    if (err) {
      callback("Unable to  connect to  Search City Service",geoRes,send);
    } else if (res.body.Code) {
        // console.log(res.body.Message);
      callback(res.body.Message,geoRes,send);
    } else {
      const city = res.body;
      callback(undefined, {
        ...geoRes,
        key: city.Key,
        name: city.LocalizedName,
        countryId: city.Country.ID.toLowerCase(),
        readable(){
          console.log( `You are in ${this.name}`)
          console.log(``)
        }
      },
      send
      );
    }
  });
};

module.exports = citySearch;
