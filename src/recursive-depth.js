const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, level=0){
    let self=this;
    let arr=[];

    level++;
    for(let item of array){
      if (item instanceof Array){
        arr.push(self.calculateDepth(item,level));
      }
    }
    let maxArrLevel=Math.max(...arr);
    level = (level>=maxArrLevel)?level:maxArrLevel;
    return level;
  }
};