// utils/constants.js
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
  