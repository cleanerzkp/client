import React, { useState } from 'react';
import './App.css';
import ConnectWalletButton from './utils/ConnectWalletButton';
import { connectToWallet, getContracts } from './utils/connectWallet';
import CargoHeader from './components/CargoHeader';
import Dashboard from './components/Dashboard';

function App() {
  const [connected, setConnected] = useState(false);
  const [contracts, setContracts] = useState({});
  const [account, setAccount] = useState(null);
  const [portNames, setPortNames] = useState([]);

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

  const createOrder = (packageSize, courier,startingPort, destinationPort) => {
// TODO: Implement order creation logic
console.log('Creating order...', packageSize, courier, startingPort, destinationPort);
};

const trackOrder = (orderId) => {
// TODO: Implement order tracking logic
console.log('Tracking order...', orderId);
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
