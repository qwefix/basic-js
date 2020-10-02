const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(str===undefined) return
  let aditionalArray=[];
  let secondArr=[];
  let additionStr='';
  let strPlusAddition='';
  let result='';
  if (!options.additionSeparator)options.additionSeparator='|'
  if (!options.separator)options.separator='+';
  if (!options.additionRepeatTimes)options.additionRepeatTimes=1;

  if (options.addition!==undefined){
    
    for(let i=0;i<options.additionRepeatTimes;i++){
      aditionalArray.push( String(options.addition));
    }
    additionStr=aditionalArray.join(options.additionSeparator)
  }
  strPlusAddition=String(str)+additionStr;

  if(options.repeatTimes&&options.repeatTimes%1==0){
    for(let i=0;i<options.repeatTimes;i++){
      secondArr.push(strPlusAddition);    
    }
    result=secondArr.join(options.separator)
  }else{
    result=strPlusAddition;
  }
  return result
};
  