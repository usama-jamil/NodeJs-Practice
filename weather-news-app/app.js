const request = require("request");

const geoLocation = require("./utils/geoLocation");
const citySearch = require("./utils/citySearch");
const cityForecast = require("./utils/cityForecast");
const countryNews = require("./utils/countryNews");
const ipLocation = require("./utils/ipLocation");


ipLocation(undefined,(err,res)=>{
  if(err) {console.log(err)} else {
    res.readable();
    citySearch(res.latitude, res.longitude, searchRes);
  }
})




// geoLocation("karachi", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     res.readable();
//     citySearch(res.latitude, res.longitude, searchRes);
//   }
// });

const searchRes = (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.readable();
    cityForecast(res.key, res.countryId, forecastRes);
  }
};

const forecastRes = (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.readable();
    countryNews(res.countryId,newsRes)
    
  }
};

const newsRes =(err,res)=>{
  err? console.log(err) : res.readable()
}


// search city
// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF&q=karachi

//city weather
//http://dataservice.accuweather.com/forecasts/v1/daily/1day/261158?apikey=pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF

// ip say location
// https://api.ipgeolocation.io/ipgeo?apiKey=b1ec53c04f5a40039a9c8a2a1516c651&ip=111.88.39.211

//news
//https://newsapi.org/v2/top-headlines?country=us&apiKey=7d12be6afdca4f62b59d6269a6dc8519

//map
//https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidXNhbWFqYW1pbCIsImEiOiJjanVmdGRia3owZ2ZiNDVvZWE1a2NvaXp2In0.Jir13sZf16d_quz7ofyBVg&limit=1
