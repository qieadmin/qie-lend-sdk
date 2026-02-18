const { Contract } = require("ethers");
const CTOKEN=require("../abi/ctoken.json");
const approveIfNeeded=require("../utils/approveIfNeeded");
const simulate=require("../utils/simulate");

module.exports = async function supply(sdk,{market,amount}){

  if(!sdk.signer) throw Error("Signer required");

  const m=sdk.config.markets[market];
  if(!m) throw Error("Unknown market");

  await approveIfNeeded(
    sdk.signer,
    m.underlying,
    m.cToken,
    amount
  );

  const cToken=new Contract(m.cToken,CTOKEN,sdk.signer);

  await simulate(cToken,"mint",[amount]);

  const gas=await cToken.mint.estimateGas(amount);

  return await cToken.mint(amount,{gasLimit:gas});
};
