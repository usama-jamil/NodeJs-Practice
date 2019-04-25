const geoLocation = require("./geoLocation");
const citySearch = require("./citySearch");
const cityForecast = require("./cityForecast");
const countryNews = require("./countryNews");
const ipLocation = require("./ipLocation");


const cityToday = city =>{

    if (city) {
        geoLocation(city, (err, res) => {
          if (err) {
            return  err;
          } else {
            return res;
            res.readable();
            citySearch(res.latitude, res.longitude, searchRes);
          }
        });
      } else {
        ipLocation(undefined, (err, res) => {
          if (err) {
            return  err;
          } else {
             return res;
            citySearch(res.latitude, res.longitude, searchRes);
          }
        });
      }
      
      const searchRes = (err, res) => {
        if (err) {
            return  err;
        } else {
          res.readable();
          cityForecast(res.key, res.countryId, forecastRes);
        }
      };
      
      const forecastRes = (err, res) => {
        if (err) {
            return  err;
        } else {
          res.readable();
          countryNews(res.countryId, newsRes);
        }
      };
      
      const newsRes = (err, res) => {
        err ?  err : res;
      };
      
}
module.exports =cityToday