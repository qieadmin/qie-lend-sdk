const supply=require("./actions/supply");
const borrow=require("./actions/borrow");
const repay=require("./actions/repay");
const withdraw=require("./actions/withdraw");
const portfolio=require("./read/portfolio");
const totals=require("./read/totals");

class LendingSDK{

 constructor({provider,signer,config}){
   this.provider=provider;
   this.signer=signer;
   this.config=config;
 }

 supply(a){return supply(this,a);}
 borrow(a){return borrow(this,a);}
 repay(a){return repay(this,a);}
 withdraw(a){return withdraw(this,a);}

 getPortfolio(u){return portfolio(this,u);}
 getTotals(){return totals(this);}
}

module.exports=LendingSDK;
