const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array:[],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    let str = `( ${value} )`
    this.array.push(str);
    return this;    
  },
  removeLink(position) {
    if(position<1||position>this.array.length){this.array=[];throw new Error;}
    this.array.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result=this.array.join('~~');
    this.array=[];
    return result
  }

};

module.exports = chainMaker;
