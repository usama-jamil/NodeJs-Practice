const request = require("request");
const geoLocation =require('./utils/geoLocation')
const citySearch = require('./utils/citySearch')
const cityForecast = require('./utils/cityForecast')



const ipLocationKey = "b1ec53c04f5a40039a9c8a2a1516c651";
const newsKey = "7d12be6afdca4f62b59d6269a6dc8519";

const ipUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${ipLocationKey}`;
const newsUrl = `https://newsapi.org/v2/top-headlines?country=${"us"}&apiKey=${newsKey}&pageSize=5`;



// geoLocation('karachi', (err,res)=>{
//   err? console.log(err) : console.log(res)
// })


// citySearch(67.114544,24.870862,(err,res)=>{
//     err? console.log(err) : console.log(res)
// })






cityForecast(261158,(err,res)=>{
    err? console.log(err) : console.log(res)
})


//  City Weather


// Ip location
// request({ url: ipUrl, json: true }, (err, res) => {
//     // console.log(res.body)
//     if (err) {
//       console.log("Unable to  connect to  Search City Service", err);
//     } else if (res.body.Message) {
//       console.log("Invalid City!...");
//     } else {
//       const ipLocation = res.body;
//       console.log(ipLocation.country_code2)
//       console.log(ipLocation.city)
//       console.log(ipLocation.ip)
//       console.log('Geolocation')
//       console.log(ipLocation.latitude)
//       console.log(ipLocation.longitude)
//     }
//   });



// News
// request({ url: newsUrl, json: true }, (err, res) => {
//     // console.log(res.body)
//     if (err) {
//       console.log("Unable to  connect to  Search City Service", err);
//     } else if (res.body.message) {
//         // console.log(res.body.code)
//       console.log(res.body.message);
//     } else {
//       const news = res.body;
//       console.log(news.articles[0].source.name)
//       console.log('News')
//       console.log(news.articles[0].title)
//       console.log(news.articles[0].description)
//       console.log(news.articles[0].author)
//     }
//   });


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
