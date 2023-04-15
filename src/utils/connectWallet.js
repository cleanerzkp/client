// utils/connectWallet.js
import { ethers } from 'ethers';
import CargoDelivery from '../artifacts/contracts/CargoDelivery.sol/CargoDelivery.json';
import CRGOToken from '../artifacts/contracts/CRGOToken.sol/CRGOToken.json';
import CargoNFT from '../artifacts/contracts/CargoNFT.sol/CargoNFT.json';

const cargoDeliveryAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const crgoTokenAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const cargoNFTAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export async function connectToWallet() {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask is not installed!');
    return null;
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const account = accounts[0];
    return { signer, account };
  } catch (err) {
    console.error(err);
    alert('Failed to connect to the wallet');
    return null;
  }
}

export function getContracts(signer) {
  const cargoDelivery = new ethers.Contract(cargoDeliveryAddress, CargoDelivery.abi, signer);
  const crgoToken = new ethers.Contract(crgoTokenAddress, CRGOToken.abi, signer);
  const cargoNFT = new ethers.Contract(cargoNFTAddress, CargoNFT.abi, signer);
  return { cargoDelivery, crgoToken, cargoNFT };
}
