const request = require("request");

const accuWeatherKey = "mWW36XM9XBprnpfIZCKovK5GKL3HoB2i";
// const accuWeatherKey = "pszNmXwiUGJ8kkufCpGZ1B5Xq1BZKobF";
const cityForecast = (forecastRes, send, callback) => {
  const cityWeatherUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${forecastRes.key}?apikey=${accuWeatherKey}&metric=true`;

  request({ url: cityWeatherUrl, json: true }, (err, res) => {
    // console.log(res.body)
    if (err) {
      callback("Unable to  connect to  Search City Service", forecastRes,send);
    } else if (res.body.Code) {
      // console.log(res.body.Message);
      callback(res.body.Message,forecastRes,send);
    } else {
      const weather = res.body;

      callback(
        undefined,
        {
          ...forecastRes,
          Headline: weather.Headline.Text,
          MinTemperature: weather.DailyForecasts[0].Temperature.Minimum.Value,
          MaxTemperature: weather.DailyForecasts[0].Temperature.Maximum.Value,
          Day: weather.DailyForecasts[0].Day.IconPhrase,
          Night: weather.DailyForecasts[0].Night.IconPhrase,
          readable() {
            console.log(this.Headline);
            console.log(``);
            console.log(`Max Temperature is ${this.MaxTemperature} C`);
            console.log(`Min Temperature is ${this.MinTemperature} C`);
            console.log(``);
            console.log(`Day is ${this.Day}`);
            console.log(`Night is ${this.Night}`);
            console.log(``);
          }
        },
        send
      );
    }
  });
};

module.exports = cityForecast;