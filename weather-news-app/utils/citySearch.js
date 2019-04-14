const request = require("request");

const accuWeatherKey = "mWW36XM9XBprnpfIZCKovK5GKL3HoB2i";
// const accuWeatherKey = "pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF";
const citySearch = (latitude, longitude, callback) => {
  const searchCityUrl = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuWeatherKey}&q=${latitude}%2C${longitude}`;

  request({ url: searchCityUrl, json: true }, (err, res) => {
    if (err) {
      callback("Unable to  connect to  Search City Service");
    } else if (res.body.Code) {
        console.log(res.body.Message);
      callback("City Not Found!...");
    } else {
      const city = res.body;
      callback(undefined, {
        key: city.Key,
        name: city.LocalizedName,
        couttryId: city.Country.ID.toLowerCase()
      });
    }
  });
};

module.exports = citySearch;
