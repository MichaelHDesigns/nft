module.exports = {
  contracts_build_directory: './public/contracts',
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '2330',
    },
  },
  compilers: {
    solc: {
      version: '0.8.16',
    },
  },
};
