module.exports = async function simulate(contract,method,args){

  try{
    await contract[method].staticCall(...args);
  }catch(e){
    throw Error("Simulation failed: "+e.shortMessage || e.message);
  }

};
