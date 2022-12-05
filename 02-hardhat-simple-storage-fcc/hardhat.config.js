require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")



const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "cb306561-c202-4214-9fbf-ef873ca7fede"

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
      localhost:{
        url: "http://127.0.0.1:8545/",
        chainId: 31337,
      },
  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter:{
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  }
};
