module.exports = function repeater(str, options) {
  let res = '';
  if (options) {
      const times = options.repeatTimes || 1;
      let addition = typeof options.addition === 'boolean' || options.addition === null ? String(options.addition) : options.addition || '';
      const separator = options.separator || '+';
      const additionRepeat = options.additionRepeatTimes || 1;
      const additionSeparator = options.additionSeparator || '|';
      let additionPattern = addition;
      if (additionRepeat > 1) {
          additionPattern = additionSeparator + addition;
      }
      const pattern = str + addition + additionPattern.repeat(additionRepeat - 1);
      for (let i = 1; i <= times; i++) {
          res += pattern;
          if (i < times) {
              res += separator;
          }
      }
  }
  return res;
};