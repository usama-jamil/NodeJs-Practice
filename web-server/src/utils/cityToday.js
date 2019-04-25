const geoLocation = require("./geoLocation");
const citySearch = require("./citySearch");
const cityForecast = require("./cityForecast");
const countryNews = require("./countryNews");
const ipLocation = require("./ipLocation");


const cityToday = (city , send)=>{

    if (city) {
        geoLocation(city, (err, res) => {
          if (err) {
            return  err;
          } else {
            return res;
            // res.readable();
            citySearch(res.latitude, res.longitude, searchRes);
          }
        });
      } else {
        ipLocation(undefined, (err, res) => {
          if (err) {
            return  err;
          } else {
            // callBack(res)
            // return res;
            // res.readable();
            citySearch(res,send,searchRes);
          }
        });
      }
      
      const searchRes = (err, res ,send) => {
        if (err) {
            return  err;
        } else {
          // send(res)
          // res.readable();
          cityForecast(res,send, forecastRes);
        }
      };
      
      const forecastRes = (err, res ,send) => {
        if (err) {
            return  err;
        } else {
          send(res)
          // res.readable();
          // countryNews(res.countryId, newsRes);
        }
      };
      
      const newsRes = (err, res) => {
        err ?  err : res;
      };
      
}
module.exports =cityToday