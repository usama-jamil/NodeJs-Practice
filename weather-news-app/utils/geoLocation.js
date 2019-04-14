const request = require("request");

const mapKey = "pk.eyJ1IjoidXNhbWFqYW1pbCIsImEiOiJjanVmdGRia3owZ2ZiNDVvZWE1a2NvaXp2In0.Jir13sZf16d_quz7ofyBVg";
const geoLocation = (city, callback) => {
  const mapUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapKey}&limit=1`;

  request({ url: mapUrl, json: true }, (err, res) => {
    // console.log(res.body)
    if (err) {
      // console.log(err)
      callback("Unable to  connect to  weather service");
    } else if (res.body.message || res.body.features.length === 0) {
      callback("Location Not Found!...");
    } else {
      callback(undefined, {
        longitude: res.body.features[0].center[0],
        latitude: res.body.features[0].center[1],
        location: res.body.features[0].place_name
      });
    }
  });
};

module.exports = geoLocation;
