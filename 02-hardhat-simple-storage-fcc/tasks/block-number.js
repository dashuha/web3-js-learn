const { task } = require("hardhat/config")

//task的参数一为名字，参数二为描述
task("block-number", "Prints the current block number").setAction(      //setaction为执行什么函数
  // const blockTask = async function() => {}
  // async function blockTask() {}
  async (taskArgs, hre) => {        //hre为hardhat运行环境
    const blockNumber = await hre.ethers.provider.getBlockNumber()
    console.log(`Current block number: ${blockNumber}`)
  }
)

module.exports = {}