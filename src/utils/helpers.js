// utils/helpers.js
import { DELIVERY_SIZES } from './constants';

export const calculatePrice = (weight, distance) => {
  let rewardRate;

  if (weight <= DELIVERY_SIZES.SMALL.weightLimit) {
    rewardRate = DELIVERY_SIZES.SMALL.rewardRate;
  } else if (weight <= DELIVERY_SIZES.MEDIUM.weightLimit) {
    rewardRate = DELIVERY_SIZES.MEDIUM.rewardRate;
  } else if (weight <= DELIVERY_SIZES.LARGE.weightLimit) {
    rewardRate = DELIVERY_SIZES.LARGE.rewardRate;
  } else {
    rewardRate = DELIVERY_SIZES.EXTRA_LARGE.rewardRate;
  }

  return rewardRate * distance;
};
