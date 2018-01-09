const Block = require('./Block.js');
/*
 * A class that holds our blockchain implemented using an array
 * Our chain is initialized by a Genesis Block - or the first block in the scratchChain
 * Currently able to get the most recent block on the chain and also add new block to our chain
 */
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    const currentDate = new Date();
    return new Block(0, this.date, "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.createHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for(let i = 1; i < this.chain.length; i ++) {
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];

      if(this.currentBlock.hash !== currentBlock.createHash()) {
        return false;
      }
      if(this.currentblock.prevHash !== prevBlock.hash) {
        return false;
      }
    }
    return true;
  }

}

 module.exports = Blockchain;
