const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
  // let simpleStorageFactory
  // let simpleStorage
  let simpleStorageFactory, simpleStorage
  beforeEach(async function () {            //neforeEach为执行每个it之前的函数
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  //如果仅仅测试一个，在运行测试时指定其第一个参数的名字  yarn hardhat test --grep "Should start with a favorite number of 0"也可以是其中的一个字段
  //使用it.only()，仅测试该函数
  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue)
    // expect(currentValue.toString()).to.equal(expectedValue)
  })
  it("Should update when we call store", async function () {
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })

  // Extra - this is not in the video
//   it("Should work correctly with the people struct and array", async function () {
//     const expectedPersonName = "Patrick"
//     const expectedFavoriteNumber = "16"
//     const transactionResponse = await simpleStorage.addPerson(
//       expectedPersonName,
//       expectedFavoriteNumber
//     )
//     await transactionResponse.wait(1)
//     const { favoriteNumber, name } = await simpleStorage.people(0)
//     // We could also do it like this
//     // const person = await simpleStorage.people(0)
//     // const favNumber = person.favoriteNumber
//     // const pName = person.name

//     assert.equal(name, expectedPersonName)
//     assert.equal(favoriteNumber, expectedFavoriteNumber)
//   })
})