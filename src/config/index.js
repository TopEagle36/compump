import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { arbitrum, mainnet } from 'wagmi/chains'



// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '3e205ec1e2f65ac244dd2b4a8099d004'

// 2. Create wagmiConfig
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: false,
    socials: [],
    // showWallets: false,
    // walletFeatures: false
  }
})