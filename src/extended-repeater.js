module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  return (
    String(str) +
    (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -Number(additionSeparator.length)) +
    separator
  )
    .repeat(repeatTimes)
    .slice(0, -Number(separator.length));
};