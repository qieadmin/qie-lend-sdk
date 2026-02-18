const { Contract }=require("ethers");
const CTOKEN=require("../abi/ctoken.json");
const getHealth=require("../utils/health");

module.exports=async function portfolio(sdk,user){

  const supplied=[];
  const borrowed=[];

  for(const key in sdk.config.markets){

    const m=sdk.config.markets[key];
    const cToken=new Contract(m.cToken,CTOKEN,sdk.provider);

    const s=await cToken.balanceOfUnderlying.staticCall(user);
    const b=await cToken.borrowBalanceStored(user);

    if(s>0n) supplied.push({market:key,amount:s.toString()});
    if(b>0n) borrowed.push({market:key,amount:b.toString()});
  }

  const health=await getHealth(sdk,user);

  return {supplied,borrowed,health};
};
