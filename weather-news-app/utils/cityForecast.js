

const request = require("request");

const accuWeatherKey = "mWW36XM9XBprnpfIZCKovK5GKL3HoB2i";
// const accuWeatherKey = "pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF";
const cityForecast = (cityKey,callback) =>{
    const cityWeatherUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${accuWeatherKey}&metric=true`;

    request({ url: cityWeatherUrl, json: true }, (err, res) => {
        // console.log(res.body)
        if (err) {
          console.log("Unable to  connect to  Search City Service", err);
        } else if (res.body.Code) {
          console.log(res.body.Message)
          callback("Invalid City!...");
        } else {
          const weather = res.body;

          callback(undefined,{
               Headline:        weather.Headline.Text,
               MinTemperature:  weather.DailyForecasts[0].Temperature.Minimum.Value,
               MaxTemperature:  weather.DailyForecasts[0].Temperature.Maximum.Value,
               Day:             weather.DailyForecasts[0].Day.IconPhrase,
               Night:           weather.DailyForecasts[0].Night.IconPhrase
          })
        }
      });
    
}

module.exports =cityForecast