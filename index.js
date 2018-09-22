const Blockchain = require('./chain.js');
const Block = require('./block.js');

let scratchChain = new Blockchain();

const currentDate = new Date();

scratchChain.addNewBlock(new Block(1, currentDate, { greatestRapperOfAllTime: "Kendrick Lamar" }));
scratchChain.addNewBlock(new Block(2, currentDate, { favoriteRapperOfAllTime: "J. Cole" }));

console.log("Is chain valid? " + scratchChain.isChainValid());

//console.log(JSON.stringify(scratchChain, null, 4));
