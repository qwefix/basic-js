const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array, level=0){ 
    level++;
    let self=this;
    let arr=[];
    for(let item of array){
      if (item instanceof Array){
        arr.push(self.calculateDepth(item,level));
      }
    }
    let maxArrLevel=self.maxOfArr(arr);
    level = (level>=maxArrLevel)?level:maxArrLevel;
    return level;
  }
  maxOfArr(array){
    let max=0;
    for(let item of array){
      if (item>max){
        max=item;
      }
    }
    return max
  }
};