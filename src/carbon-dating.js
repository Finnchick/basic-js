const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (+sampleActivity % 10 || +sampleActivity === 0 || +sampleActivity < 0 || +sampleActivity > 100) {
    return false;
  }
  if(parseInt(sampleActivity) != sampleActivity) {
    return false;
  }
if (typeof(sampleActivity) != "string") {
  return false;
}

let k = 0.693/HALF_LIFE_PERIOD;

let t = Math.log10(MODERN_ACTIVITY/sampleActivity)/k;

return Math.ceil(t);

};
