const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members))return false;
  let nameArray=[];
  let name='';
  for(let member of members){
    if(typeof member==typeof ''){
      let symbol=' ';
      for(let i=0;symbol==' ';i++){
        symbol=member[i];
      }
      nameArray.push(symbol.toUpperCase())
    }
  }
  let sorted = nameArray.sort();
  for(let item of sorted){
    name+=item;
  }
  return name
};
