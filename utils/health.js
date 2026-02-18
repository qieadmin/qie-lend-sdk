const { Contract } = require("ethers");
const COMP = require("../abi/comptroller.json");

module.exports = async function getHealth(sdk,user){

  const comp=new Contract(
    sdk.config.comptroller,
    COMP,
    sdk.provider
  );

  const [err, liquidity, shortfall]=
    await comp.getAccountLiquidity(user);

  if(shortfall>0n) return 0;

  return Number(liquidity)/1e18;
};
