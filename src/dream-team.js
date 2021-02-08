const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (Array.isArray(members) === false) return false;
for (let i = 0; i < members.length; i++){
  if (typeof(members[i]) === "string") {
  let temp = members[i].split('');
  for (let j = temp.length - 1; j >= 0; j--){
  if (temp[j] === ' ') temp.splice(j, 1);
  }
  if (temp[0].toLowerCase() === temp[0]){
     temp[0] = temp[0].toUpperCase();
  }
  members[i] = temp.join('');
}
}
let str = '';

members.sort();
for (let i = 0; i < members.length; i++){
  if (typeof(members[i]) === "string") str += members[i][0];
}
return str;
};
