const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrIncome) {
  let arr= arrIncome.slice();
  for(let i=0;i<arr.length;i++){
   
    switch (arr[i]) {
      case `--discard-next`:
        arr[i+1]=undefined;
        arr[i]=undefined;
      break;

      case `--discard-prev`:
        if(i==0){
          arr[i]=undefined;
          break;
        }
        arr[i-1]=undefined;
        arr[i]=undefined;
      break;

      case '--double-next':
        if(i+1==arr.length){
          arr[i]=undefined;
          break;
        }
        arr[i]=arr[i+1];
      break

      case '--double-prev':
        if(i==0){
          arr[i]=undefined;
          break
        }
        arr[i]=arr[i-1];
      break
    }
  }
  for(let i=0;i<arr.length;i++){
    if(arr[i]==undefined){
      arr.splice(i,1);
      i--;
    }
  }
  return arr
}
