# QIE Lending SDK

Official JavaScript SDK for interacting with the **QIE Lending Protocol** on QIE Mainnet.

This SDK enables developers to easily integrate lending features into their applications, including:

* Supplying assets
* Borrowing assets
* Repaying loans
* Withdrawing supplied funds
* Viewing user portfolio
* Viewing protocol totals

---

## 📦 Installation

Install directly from GitHub:

```bash
npm install github:qieadmin/qie-lend-sdk
```

---

## ⚡ Quick Start

```js
const { LendingSDK, config } = require("qie-lend-sdk");
const { JsonRpcProvider, Wallet } = require("ethers");

const provider = new JsonRpcProvider(
  "https://rpc4mainnet.qie.digital",
  { name: "QIE", chainId: 1990 }
);

// Only required for transactions
const wallet = new Wallet("PRIVATE_KEY", provider);

const sdk = new LendingSDK({
  provider,
  signer: wallet, // optional for read-only
  config
});
```

---

## 🌐 Network Details

```
Network: QIE Mainnet
Chain ID: 1990
RPC: https://rpc4mainnet.qie.digital
```

---

## 🏦 Supported Markets

| Market | cToken                                     |
| ------ | ------------------------------------------ |
| WBNB   | 0xD072cDDc4e8A15EE532F7fB7AC583a3715b5261f |
| WETH   | 0x0b8F865dd5E822323F3B45554bdbC8De3715dA60 |
| QUSDC  | 0x3EcD3b3fa22Cc251301BA78F4Ba014f78B6FE542 |
| WQIE   | 0x25A9bD97C90161A622a75A4Fd87ea0e7507324CA |

---

# 💰 Transaction Examples

## Supply Assets

```js
await sdk.supply({
  market: "QUSDC",
  amount: 1_000_000n   // 1 QUSDC
});
```

---

## Borrow Assets

```js
await sdk.borrow({
  market: "WETH",
  amount: 100000000000000000n   // 0.1 WETH
});
```

---

## Repay Loan

```js
await sdk.repay({
  market: "WETH",
  amount: 100000000000000000n
});
```

---

## Withdraw Supplied Funds

```js
await sdk.withdraw({
  market: "QUSDC",
  amount: 500000n
});
```

---

# 📊 Read-Only Examples

## Get Protocol Totals

```js
const totals = await sdk.getTotals();
console.log(totals);
```

Output:

```
{
  totalSupply: "...",
  totalBorrow: "..."
}
```

---

## Get User Portfolio

```js
const portfolio = await sdk.getPortfolio("USER_ADDRESS");
console.log(portfolio);
```

Output:

```
{
  supplied: [{ market, amount }],
  borrowed: [{ market, amount }],
  health: number
}
```

---

# 🧪 Full Example Script

```js
const { LendingSDK, config } = require("qie-lend-sdk");
const { JsonRpcProvider, Wallet } = require("ethers");

async function main(){

  const provider = new JsonRpcProvider(
    "https://rpc4mainnet.qie.digital",
    { name:"QIE", chainId:1990 }
  );

  const wallet = new Wallet("PRIVATE_KEY", provider);

  const sdk = new LendingSDK({
    provider,
    signer: wallet,
    config
  });

  console.log("Totals:");
  console.log(await sdk.getTotals());

  console.log("Portfolio:");
  console.log(await sdk.getPortfolio(wallet.address));

}

main();
```

---

# 🔐 Notes

* Requires **Node.js 18+**
* Uses **ethers v6**
* Transactions require a signer
* Read-only calls only need provider
* Amounts must be **BigInt**

Example:

```
1_000_000n
```

---

# 🛠 Example Backend API

```js
const express=require("express");
const { JsonRpcProvider }=require("ethers");
const { LendingSDK,config }=require("qie-lend-sdk");

const app=express();

const provider=new JsonRpcProvider(
 "https://rpc4mainnet.qie.digital",
 { name:"QIE", chainId:1990 }
);

const sdk=new LendingSDK({provider,config});

app.get("/totals", async(req,res)=>{
 res.json(await sdk.getTotals());
});

app.listen(3000);
```

---

# 📄 License

MIT

---

# 🤝 Support

For issues or integration help, open a GitHub issue in this repository.
