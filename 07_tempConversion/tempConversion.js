function convertToCelsius(F) {
  return Math.round(10 * ((5/9)*(F-32))) / 10;
}

function convertToFahrenheit(C) {
  return Math.round(10 * ((9/5*C)+32)) / 10;
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
