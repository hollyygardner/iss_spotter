const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP(mockData.ip, (error, coords) => {
  if (error) {
    console.log('It didn\'t work! Failed to fetch coordinates. \n', error);
    return;
  }
  console.log('It worked! Your coordinates are: ', coords);
});