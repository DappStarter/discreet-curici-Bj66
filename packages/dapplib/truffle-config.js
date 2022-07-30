require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain huge include enrich surge gesture'; 
let testAccounts = [
"0xcb8bcc2e8b106f09530f7b9bebcbc699104bcc6fb04a9fee2a73cae89464d380",
"0xa786534a4e2290c351ca17192b945ac8af9a0cc168575bcc4258eb8bd3fbb07c",
"0x46d4332fbe8d1a1ccc9e69808ef696e79f97af393411f5e7479466eda0924096",
"0xbcc67be4918248da19fa6c66a60bf3b06bb96f47e01916db7021cd38466dceb2",
"0x6611077d0ad4ddf7fbac68305490a9692a46b8bedcc981afbb9480a8d960cb69",
"0x73bc3d1c1eb03702dbbdc8c772b61bd704e89a1197930af8e1e8cea0f14d089b",
"0x1df8764550a3dccc74310f08d3219341c2563fa9fe956cb255b24cffef2db9b1",
"0x9efdebd3c75d5c6c3ac50b558f4db7329ec24a50a50837fb63c7c56038593a69",
"0x2721f47fec76fd246bfd082fd631dbd2db59502866c4f667c60dad48c7ae4442",
"0x9fbdcae69670e00c176a3a1758a645bc6ebdf56b59cddf621e5d4683cf3dfecc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


