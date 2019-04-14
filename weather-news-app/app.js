const request = require("request");

const accuWeatherKey = "pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF";
const ipLocationKey = "b1ec53c04f5a40039a9c8a2a1516c651";
const newsKey = "7d12be6afdca4f62b59d6269a6dc8519";
const mapKey ="pk.eyJ1IjoidXNhbWFqYW1pbCIsImEiOiJjanVmdGRia3owZ2ZiNDVvZWE1a2NvaXp2In0.Jir13sZf16d_quz7ofyBVg";

const ipUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${ipLocationKey}`;
const newsUrl = `https://newsapi.org/v2/top-headlines?country=${"us"}&apiKey=${newsKey}&pageSize=5`;
const cityWeatherUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${"261158"}?apikey=${accuWeatherKey}&metric=true`;
const searchCityUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${accuWeatherKey}&q=${"ka309580"}`;
const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapKey}&limit=1`;


// Map GeoLocation   

// request({ url: mapUrl, json: true }, (err, res) => {
//   // console.log(res.body)
//   if (err) {
//     console.log("Unable to  connect to  weather service", err);
//   } else if (res.body.message) {
//     console.log("Location Not Found!...");
//   } else {
//     console.log(
//       `Longitude ${res.body.features[0].center[0]}  , 
//       Latitude ${res.body.features[0].center[1]}`
//     );
//   }
// });


//  Search City 

// request({ url: searchCityUrl, json: true }, (err, res) => {
//   // console.log(res.body)
//   if (err) {
//     console.log("Unable to  connect to  Search City Service", err);
//   } else if (res.body.length === 0) {
//     console.log("City Not Found!...");
//   } else {
//     const city = res.body[0];
//     console.log(
//       `Longitude ${city.GeoPosition.Longitude}  , 
//         Latitude ${city.GeoPosition.Latitude}`,
//       `CityName ${city.EnglishName} Key ${city.Key}`
//     );
//   }
// });


//  City Weather
// request({ url: cityWeatherUrl, json: true }, (err, res) => {
//     // console.log(res.body)
//     if (err) {
//       console.log("Unable to  connect to  Search City Service", err);
//     } else if (res.body.Message) {
//       // console.log(res.body.Code)
//       console.log("Invalid City!...");
//     } else {
//       const weather = res.body;
//       console.log(weather.Text);
//       console.log('Temperature')
//       console.log(weather.DailyForecasts[0].Temperature.Minimum.Value)
//       console.log(weather.DailyForecasts[0].Temperature.Maximum.Value)
//     }
//   });


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
request({ url: newsUrl, json: true }, (err, res) => {
    // console.log(res.body)
    if (err) {
      console.log("Unable to  connect to  Search City Service", err);
    } else if (res.body.message) {
        // console.log(res.body.code)
      console.log(res.body.message);
    } else {
      const news = res.body;
      console.log(news.articles[0].source.name)
      console.log('News')
      console.log(news.articles[0].title)
      console.log(news.articles[0].description)
      console.log(news.articles[0].author)
    }
  });


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
