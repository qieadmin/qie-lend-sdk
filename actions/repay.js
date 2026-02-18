const { Contract } = require("ethers");
const ERC20 = require("../abi/erc20.json");
const CTOKEN = require("../abi/ctoken.json");

module.exports = async function repay(sdk,{market,amount}){

  const m = sdk.config.markets[market];

  const erc20 = new Contract(m.underlying, ERC20, sdk.signer);
  await (await erc20.approve(m.cToken, amount)).wait();

  const cToken = new Contract(m.cToken, CTOKEN, sdk.signer);
  return await cToken.repayBorrow(amount);
};
