const { Contract } = require("ethers");
const CTOKEN = require("../abi/ctoken.json");

module.exports = async function withdraw(sdk,{market,amount}){

  const m = sdk.config.markets[market];

  const cToken = new Contract(m.cToken, CTOKEN, sdk.signer);
  return await cToken.redeemUnderlying(amount);
};
