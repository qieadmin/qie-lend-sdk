const { Contract } = require("ethers");
const CTOKEN=require("../abi/ctoken.json");
const COMP=require("../abi/comptroller.json");
const simulate=require("../utils/simulate");

module.exports=async function borrow(sdk,{market,amount}){

  const m=sdk.config.markets[market];

  const comp=new Contract(
    sdk.config.comptroller,
    COMP,
    sdk.signer
  );

  await (await comp.enterMarkets([m.cToken])).wait();

  const cToken=new Contract(m.cToken,CTOKEN,sdk.signer);

  await simulate(cToken,"borrow",[amount]);

  const gas=await cToken.borrow.estimateGas(amount);

  return await cToken.borrow(amount,{gasLimit:gas});
};
