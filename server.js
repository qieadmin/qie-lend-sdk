const express = require("express");
const { JsonRpcProvider } = require("ethers");
const { LendingSDK, config } = require("./");

const app = express();

const provider = new JsonRpcProvider(
  "https://rpc4mainnet.qie.digital",
  { name: "QIE", chainId: 1990 }
);

const sdk = new LendingSDK({ provider, config });

app.get("/portfolio/:addr", async (req, res) => {
  try {
    const data = await sdk.getPortfolio(req.params.addr);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/totals", async (req, res) => {
  try {
    const data = await sdk.getTotals();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () =>
  console.log("SDK API running on http://localhost:3000")
);
