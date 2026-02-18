const { Contract } = require("ethers");
const MULTI = require("../abi/multicall.json");

module.exports = async function multicall(provider,address,calls){

  const multi=new Contract(address,MULTI,provider);
  return await multi.aggregate.staticCall(calls);

};
