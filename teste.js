const Block = require('./block');genesis

const block = new Block('74517', '78454ashAHSU4', '4521587ASHDH35', '100');
console.log(block.toString());
console.log(Block.genesis().toString());
const firstBlock = Block.mineBlock(Block.genesis(), 'R$ 500,00');
console.log(firstBlock.toString());