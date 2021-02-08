const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if (!Array.isArray(arr)) {
  throw new Error;
}
let result_arr = [];
for (let i = 0; i < arr.length; i++){
  
  if (arr[i] !== "--discard-next" && arr[i] !== "--discard-prev" && arr[i] !== "--double-next" && arr[i] !== "--double-prev"){
    result_arr.push(arr[i]);
  } else if (arr[i] === "--discard-next") {
    i += 2;
  } else if (arr[i] === "--discard-prev") {
    result_arr.pop();
  } else if (arr[i] === "--double-next" && (i + 1 != arr.length)) {
    result_arr.push(arr[i + 1]);
    i++;
  } else if (arr[i] === "--double-prev" && (i - 1 != -1)) {
    result_arr.push(arr[i - 1]);
  } 
}
return result_arr;
};
