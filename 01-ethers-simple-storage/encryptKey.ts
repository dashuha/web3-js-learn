// const ethers = require("ethers")
// const fs = require("fs-extra")
// require("dotenv").config()

import {ethers} from "ethers"
import * as fs from "fs-extra"
import "dotenv/config"

async function main() {
    console.log(process.env.PRIVATE_KEY)
    console.log(process.env.PRIVATE_KEY_PASSWORD)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!)   //创建一个钱包

    //对私钥进行加密,加上自己设定的密码。对其进行进一步的隐藏。
    //在部署时需要在前输入PRIVATE_KEY=123456 node deploy.js
    const encryptedJsonKey = await wallet.encrypt(  
        process.env.PRIVATE_KEY_PASSWORD!,
        process.env.PRIVATE_KEY
    )
    console.log(encryptedJsonKey)

    //生成该文件后，相应的信息就不需要再env文件中存储
    fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })