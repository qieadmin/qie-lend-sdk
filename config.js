module.exports = {

  chainId: 1990,
  chainName: "QIE",

  comptroller: "0x69a31E3D361C69B37463aa67Ef93067dC760fBD4",

  markets: {

    WBNB: { cToken:"0xD072cDDc4e8A15EE532F7fB7AC583a3715b5261f", underlying:"0x9e02ba5dE6d26D5Ca5688Ed3999C6bcF4F3e966E", decimals:18 },
    WETH: { cToken:"0x0b8F865dd5E822323F3B45554bdbC8De3715dA60", underlying:"0x95322ccB3fb8dDefD210805EE18662762a0bc4A2", decimals:18 },
    QUSDC:{ cToken:"0x3EcD3b3fa22Cc251301BA78F4Ba014f78B6FE542", underlying:"0x3F43DA82eC9A4f5285F10FaF1F26EcA7319E5DA5", decimals:6 },
    WQIE: { cToken:"0x25A9bD97C90161A622a75A4Fd87ea0e7507324CA", underlying:"0x0087904D95BEe9E5F24dc8852804b547981A9139", decimals:18 }

  }
};
