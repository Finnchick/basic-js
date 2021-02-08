const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

if (date === undefined) return 'Unable to determine the time of year!';  
//if (date.length !== 7) throw Error;  
if (typeof(date.getTime()) === "function") {
throw Error;
}
if (date.getMonth() <= 1) {
  return "winter"
} else if (date.getMonth() <= 4) {
  return "spring"
} else if (date.getMonth() <= 7) {
  return "summer"
} else if (date.getMonth() <= 10) {
  return "autumn"
}
else if (date.getMonth() === 11) {
  return "winter"
}
};
