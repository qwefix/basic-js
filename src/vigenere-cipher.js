const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bul){
    if (bul===false){
      this.revese=true;    }
  }
  revese=false;
    symbolsMap = {
      "A": 0,
      "B": 1,
      "C": 2,
      "D": 3,
      "E": 4,
      "F": 5,
      "G": 6,
      "H": 7,
      "I": 8,
      "J": 9,
      "K": 10,
      "L": 11,
      "M": 12,
      "N": 13,
      "O": 14,
      "P": 15,
      "Q": 16,
      "R": 17,
      "S": 18,
      "T": 19,
      "U": 20,
      "V": 21,
      "W": 22,
      "X": 23,
      "Y": 24,
      "Z": 25,
    }
    codesMap = {
      0:"A",
      1:"B",
      2:"C",
      3:"D",
      4:"E",
      5:"F",
      6:"G",
      7:"H",
      8:"I",
      9:"J",
      10:"K",
      11:"L",
      12:"M",
      13:"N",
      14:"O",
      15:"P",
      16:"Q",
      17:"R",
      18:"S",
      19:"T",
      20:"U",
      21:"V",
      22:"W",
      23:"X",
      24:"Y",
      25:"Z",
    }
  
    encrypt(message, key) {
      if(message===undefined||key===undefined) throw new Error('wooops')
      let codeArr=[];
      let upperCaseMessage=message.toUpperCase();
      if (message===undefined||key===undefined)throw new CustomError()
      let keyFullLength=''
  
      let multiply = Math.ceil(message.length/key.length);
      for(let i=0; i<multiply;i++){
        keyFullLength+=key;
      }
      let upperFullLenghtKey=keyFullLength.toUpperCase().split('');
  
  
      for(let i=0;i<upperCaseMessage.length;i++){
        if(this.symbolsMap[upperCaseMessage[i]]!==undefined){
          codeArr.push((this.symbolsMap[upperCaseMessage[i]]+this.symbolsMap[upperFullLenghtKey[i]])%26);
        }else{
          codeArr.push(upperCaseMessage[i]);
          upperFullLenghtKey.splice(i,0,' ');
        }
      }
      
      let resArr=codeArr.map((item,i)=>{
        if (this.codesMap[item]===undefined||upperFullLenghtKey[i]===' '){
          return item
        }
        return this.codesMap[item]});
      
      if(this.revese){
        resArr.reverse()
      }
      return resArr.join('')
  
    }    
  decrypt(message, key) {
    if(message===undefined||key===undefined) throw new Error('wooops');
    let codeArr=[];
      let upperCaseMessage=message.toUpperCase();
      if (message===undefined||key===undefined)throw new CustomError()
      let keyFullLength=''
  
      let multiply = Math.ceil(message.length/key.length);
      for(let i=0; i<multiply;i++){
        keyFullLength+=key;
      }
      let upperFullLenghtKey=keyFullLength.toUpperCase().split('');
  
  
      for(let i=0;i<upperCaseMessage.length;i++){
        if(this.symbolsMap[upperCaseMessage[i]]!==undefined){
          codeArr.push((26+this.symbolsMap[upperCaseMessage[i]]-this.symbolsMap[upperFullLenghtKey[i]])%26);
        }else{
          codeArr.push(upperCaseMessage[i]);
          upperFullLenghtKey.splice(i,0,' ');
        }
      }
      
      let resArr=codeArr.map((item,i)=>{
        if (this.codesMap[item]===undefined||upperFullLenghtKey[i]===' '){
          return item
        }
        return this.codesMap[item]});
      
      if(this.revese){
        resArr.reverse()
      }
      return resArr.join('')
  
  }
}

module.exports = VigenereCipheringMachine;
