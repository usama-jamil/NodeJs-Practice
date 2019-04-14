const request =require('request')

const accuWeatherKey ='pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF&q'
const ipLocationKey ='b1ec53c04f5a40039a9c8a2a1516c651'
const newsKey ='7d12be6afdca4f62b59d6269a6dc8519'
const mapKey ='pk.eyJ1IjoidXNhbWFqYW1pbCIsImEiOiJjanVmdGRia3owZ2ZiNDVvZWE1a2NvaXp2In0.Jir13sZf16d_quz7ofyBVg'

const  ipUrl =`https://api.ipgeolocation.io/ipgeo?apiKey=${ipLocationKey}&ip=${"111.88.39.211"}`
const  newsUrl =`https://newsapi.org/v2/top-headlines?country=${"us"}&apiKey=${newsKey}`
const  cityWeatherUrl =`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${"261158"}?apikey=${accuWeatherKey}`
const  searchCityUrl =`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${accuWeatherKey}&q=${"karachi"}`
const  mapUrl =`https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapKey}&limit=1`

request({url:mapUrl , json: true},(err,res)=>{
    // console.log(res.body)
    if (err) {
        console.log('Unable to  connect to  weather service',err)
    } else if(res.body.message) {
        console.log(res.body.message)
    }else{
        console.log(`Longitude ${res.body.features[0].center[0]}  , Latitude ${res.body.features[0].center[1]}`)
    }
})

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