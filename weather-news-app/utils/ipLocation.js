const chalk = require("chalk");
const request = require("request");

const ipLocationKey = "b1ec53c04f5a40039a9c8a2a1516c651";
const ipLocation = (ip = "", callback) => {
  const ipUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${ipLocationKey}&ip=${ip}`;

  request({ url: ipUrl, json: true }, (err, res) => {
    if (err) {
      callback("Unable to  connect to  Search City Service");
    } else if (res.body.message) {
      callback(res.body.message);
    } else {
      const ipLocation = res.body;
      callback(undefined, {
        ip: ipLocation.ip,
        latitude: ipLocation.latitude,
        longitude: ipLocation.longitude,
        readable(){
          console.log(`Finding Location through your ip ${chalk.inverse.bold(this.ip)}`)
          console.log("Coordinates:");
          console.log(`Latitide: ${chalk.green.inverse(this.latitude)}`);
          console.log(`Longitude: ${chalk.yellow.inverse(this.longitude)}`);
          console.log(``)
        }
      });
    }
  });
};

module.exports =ipLocation