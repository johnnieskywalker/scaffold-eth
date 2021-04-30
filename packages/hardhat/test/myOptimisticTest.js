const { l2ethers } = require("hardhat");
require("@nomiclabs/hardhat-waffle");
const { use, expect } = require("chai");

describe("My Optimistic Dapp", function () {
  let myContract;

  describe("YourContract", function () {
    it("Should deploy YourContract", async function () {
      const YourContract = await l2ethers.getContractFactory("YourContract");

      myContract = await YourContract.deploy({
        gasPrice: hre.ethers.BigNumber.from('0'),
        gasLimit: 8999999,
      });
    });

    describe("setPurpose()", function () {
      it("Should be able to set a new purpose", async function () {
        const newPurpose = "Test Purpose";

        await myContract.setPurpose(newPurpose, {
          gasPrice: hre.ethers.BigNumber.from('0'),
          gasLimit: 8999999,
        });
        let retrievedPurpose = await myContract.purpose({
          gasPrice: hre.ethers.BigNumber.from('0'),
          gasLimit: 8999999,
        })
        expect(await myContract.purpose({
          gasPrice: hre.ethers.BigNumber.from('0'),
          gasLimit: 8999999,
        })).to.equal(newPurpose);
      });
    });
  });
});
