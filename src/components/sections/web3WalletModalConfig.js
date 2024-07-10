import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'


// 1. Get projectId
const projectId = '9b53b28d60d0d331f34983171e9f1e94'

// 2. Set chains
const mainnet = {
  chainId: 56,
  name: 'BSC',
  currency: 'BNB',
  explorerUrl: 'https://bsc.drpc.org',
  rpcUrl: 'https://bsc.drpc.org'
}


// testnet XRP
// const testnet = {
//   chainId: 97,
//   name: 'BNB Smart Chain',
//   currency: 'BNB',
//   explorerUrl: '',
//   rpcUrl: 'https://bsc-testnet.drpc.org'
// }

// 3. Create a metadata object
const metadata = {
  name: 'XRPL',
  description: 'XRPL TEAM',
  url: 'https://xrpl.team', // origin must match your domain & subdomain
  icons: ['https://app.xrpl.team/favicon.ico']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: 'https://bsc.drpc.org', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeMode: 'dark'
})

export default function App() {
  return <w3m-button />
}