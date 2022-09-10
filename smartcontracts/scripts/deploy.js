// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const nftaddr = "0x652F5f72f7FACeF14BDEA3257fc7c4A90E7c8651";
  const id = 8;
  const start = 1662781403; 

  const Lock = await hre.ethers.getContractFactory("EnglishAuction");
  const lock = await Lock.deploy(nftaddr,id,start);

  await lock.deployed();

  console.log("Lock with 1 ETH deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0x793E4CDA45A5587ACaCFF894d80f990F3713A852
