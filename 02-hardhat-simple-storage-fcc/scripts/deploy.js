//从hardhat导入可以知道在哪，如果直接导入可能不清楚在哪里
const {ethers} = require("hardhat");

//async main()
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deployed()
  console.log(`Deployed contract to: ${simpleStorage.address}`) //此时没有指定地址和私钥，因为在hardhat内置的网络中

}




// main
main().then(()=>process.exit(0)).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
