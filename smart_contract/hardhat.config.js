require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle')
require('dotenv').config();
console.log(process.env)
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    goerli:{
      url: (MY_URL),
       accounts:[MY_ACCOUNT]

    }
  }
};
