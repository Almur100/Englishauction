require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const {API_URL,PRIVATE_KEY}= process.env;

module.exports = {
  solidity: "0.8.13",
  defaultNetwork: "goerli",
  networks:{
    goerli:{
      url:API_URL,
      accounts:[`0x${PRIVATE_KEY}`]
      
      
    }
  }
};
