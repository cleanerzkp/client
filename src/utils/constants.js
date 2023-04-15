// utils/constants.js


export const COURIERS = [
    {
      name: "Account #5",
      address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
      balance: 10000,
      privateKey: "0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba",
    },
    {
      name: "Account #6",
      address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
      balance: 10000,
      privateKey: "0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e",
    },
    {
      name: "Account #7",
      address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
      balance: 10000,
      privateKey: "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
    },
  ];
export const PORTS = [
    {
      name: "Port Knot City",
      index: 0,
    },
    {
      name: "Lake Knot City",
      index: 1,
    },
    {
      name: "South Knot City",
      index: 2,
    },
    {
      name: "Mountain Knot City",
      index: 3,
    },
  ];
  
  export const DELIVERY_SIZES = {
    SMALL: {
      name: "Small",
      weightLimit: 5,
      rewardRate: 1, // CRGO token reward rate per km
    },
    MEDIUM: {
      name: "Medium",
      weightLimit: 20,
      rewardRate: 3, // CRGO token reward rate per km
    },
    LARGE: {
      name: "Large",
      weightLimit: 50,
      rewardRate: 5, // CRGO token reward rate per km
    },
    EXTRA_LARGE: {
      name: "Extra Large",
      weightLimit: 100,
      rewardRate: 8, // CRGO token reward rate per km
    },
  };

export const PORT_DISTANCES = [
    [0, 15, 25, 35],
    [15, 0, 10, 20],
    [25, 10, 0, 15],
    [35, 20, 15, 0],
  ];
  