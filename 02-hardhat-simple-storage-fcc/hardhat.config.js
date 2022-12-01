require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  //默认的网络为hardhat内置
  defaultNetwork: "hardhat",
  //添加别的网络，在运行时指定即可
  networks: {
      goerli:{
        url: GOERLI_RPC_URL,
        accounts: [GOERLI_PRIVATE_KEY],
        chainId: 5,
      },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
