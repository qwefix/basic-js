const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity!=typeof''||sampleActivity<=0||sampleActivity>15||sampleActivity==false){return false};
  if(sampleActivity%1!=0){
    let arr=sampleActivity.split('.');
    sampleActivity=`${arr[0]}.${arr[1]}`;
  }  
  
  sampleActivity=+sampleActivity;
  if(typeof sampleActivity!=typeof 1||isNaN(sampleActivity)){return false}
  return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693/HALF_LIFE_PERIOD))
};
