const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {    
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value !== null ? value : null);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || position - 1 >= this.chain.length ) {
      this.chain = []
      throw new Error ('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
   let finish = '';
   for (let i = 0; i < this.chain.length; i++) {
    if (i === 0) {
      finish = finish + `( ${this.chain[i]} )`
    } else {
      finish = finish + `~~( ${this.chain[i]} )`
    }
   }
   this.chain = [];
   return finish;
  }
};

module.exports = {
  chainMaker
};