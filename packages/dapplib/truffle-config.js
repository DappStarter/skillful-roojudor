require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind evil hunt father flip test'; 
let testAccounts = [
"0xab35fccde39c42e555fffed4cd62c7b27eec879a074fd14ddc6c6ccbe15eb0f1",
"0x57373dfece366d61cd85a836114d5308a92e9e8cbf1f05cfb7feaab6f8ee0eb1",
"0xc4a3fea94b1da21b8646fc16d371ab18128f0b721549a0084f0718422c889425",
"0xc71303725a3fdb3e733a7a2f2c9fb0e8e4f5dd3a85714a2e9feb935f2b4857b8",
"0xc51140c97f40e5b3858b10afce604ea5fffedc31d25f016b99d1e3ebf7428f7e",
"0x87c44ad04b6b43c41875e3521f1bb1c6bd53ebbb7f68994b98d538299a180ffe",
"0x9b8f9ad1adbed1ee14832b99bbdaa6f735673b71e5ea3d9d1bf9573f90394a7a",
"0xcb20613bd844063583ffe8d8e9cc7fc0e8ae100a88b9d2bfe87bb0a35a403125",
"0x675f13ca9d08387980955594739f379869420be15e5fc359712655c3a5f501f3",
"0x8a37264b1aaafcaeb12465bf155ffe6750310702f1633f054876b01c750929a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

