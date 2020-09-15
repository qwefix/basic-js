const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let c=0
  for(let array of matrix){
    for(let item of array){
      if(item=="^^"){c+=1}
    }
  }
  return c
};
