import React, { useState } from 'react';
import { connectToWallet, getContracts } from './connectWallet';

function ConnectWalletButton({ onConnected }) {
  const [connecting, setConnecting] = useState(false);

  const handleClick = async () => {
    setConnecting(true);
    const wallet = await connectToWallet();
    if (wallet) {
      const { signer, account } = wallet;
      const contracts = getContracts(signer);
      onConnected(contracts, account);
    }
    setConnecting(false);
  };

  return (
    <button
      className="connect-wallet-button"
      onClick={handleClick}
      disabled={connecting}
    >
      {connecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}

export default ConnectWalletButton;
