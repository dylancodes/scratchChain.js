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
}
 module.exports = Blockchain;
