const { Contract } = require("ethers");
const ERC20 = require("../abi/erc20.json");

module.exports = async function approveIfNeeded(
  signer,
  token,
  spender,
  amount
){
  const erc20=new Contract(token,ERC20,signer);
  const owner=await signer.getAddress();

  const allowance=await erc20.allowance(owner,spender);

  if(allowance>=amount) return;

  const tx=await erc20.approve(spender,amount);
  await tx.wait();
};
