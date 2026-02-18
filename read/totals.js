const { Contract } = require("ethers");
const CTOKEN = require("../abi/ctoken.json");

module.exports = async function getTotals(sdk){

  let totalSupply=0n;
  let totalBorrow=0n;

  for(const key in sdk.config.markets){

    const m=sdk.config.markets[key];
    const cToken=new Contract(m.cToken,CTOKEN,sdk.provider);

    totalSupply+=await cToken.totalSupply();
    totalBorrow+=await cToken.totalBorrows();
  }

  return {
    totalSupply: totalSupply.toString(),
    totalBorrow: totalBorrow.toString()
  };
};
