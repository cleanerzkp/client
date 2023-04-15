import React, { useState, useEffect } from 'react';
import './App.css';
import ConnectWalletButton from './utils/ConnectWalletButton';
import { connectToWallet, getContracts } from './utils/connectWallet';
import CargoHeader from './components/CargoHeader';
import Dashboard from './components/Dashboard';
import { calculatePrice } from './utils/helpers';
import { PORT_DISTANCES } from './utils/constants';

function App() {
  const [connected, setConnected] = useState(false);
  const [contracts, setContracts] = useState({});
  const [account, setAccount] = useState(null);
  const [portNames, setPortNames] = useState([]);

  useEffect(() => {
    if (contracts.cargoNFT) {
      // Listen for the Transfer event emitted by the CargoNFT contract
      contracts.cargoNFT.on("Transfer", (from, to, tokenId) => {
        console.log(`NFT minted: tokenId ${tokenId} transferred from ${from} to ${to}`);
        // Update your UI with the new NFT
      });
    }
  }, [contracts]);

  const handleWalletConnected = async (contracts, account) => {
    setConnected(true);
    setContracts(contracts);
    setAccount(account);

    // Fetch port names from the smart contract
    const portNames = await getPortNames(contracts.cargoDelivery);
    setPortNames(portNames);
  };

  const getPortNames = async (contract) => {
    const portNames = [];
    let index = 0;
    let portName = '';

    try {
      while (true) {
        portName = await contract.portNames(index);
        portNames.push(portName);
        index++;
      }
    } catch (error) {
      console.log('All port names fetched.');
    }

    return portNames;
  };

  const createOrder = async (packageWeight, courier, startingPort, destinationPort) => {
    console.log('Creating order...', packageWeight, courier, startingPort, destinationPort);
    const price = calculatePrice(packageWeight, PORT_DISTANCES);
    try {
      const tx = await contracts.cargoDelivery.createDelivery(courier, packageWeight, startingPort, destinationPort, { value: price });
      const receipt = await tx.wait();
      console.log('Transaction receipt:', receipt);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const fetchDeliveryDetails = async (tokenId) => {
    const delivery = await contracts.cargoDelivery.deliveries(tokenId);
    // Update your UI with the delivery details
    console.log(`Delivery details for tokenId ${tokenId}:`, delivery);
  };

  const trackOrder = (orderId) => {
    // Implement order tracking logic
    fetchDeliveryDetails(orderId);
  };

  return (
    <div className={`App ${connected ? "connected" : "disconnected"}`}>
      <CargoHeader />
      {!connected ? (
        <ConnectWalletButton onConnected={handleWalletConnected} />
      ) : (
        <Dashboard
          onCreateOrder={createOrder}
          onTrackOrder={trackOrder}
          portNames={portNames}
        />
      )}
    </div>
  );
}

export default App;
