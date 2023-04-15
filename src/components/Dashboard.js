import React, { useState, useEffect } from 'react';
import { COURIERS, PORT_DISTANCES, PORTS } from '../utils/constants';
import { calculatePrice } from '../utils/helpers';
import PackageSizeSelection from './PackageSizeSelection';
import SelectPort from './SelectPort';

function Dashboard({ onCreateOrder, onTrackOrder }) {
  const [packageWeight, setPackageWeight] = useState(0);
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [courier, setCourier] = useState('');
  const [startingPort, setStartingPort] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    setPrice(calculatePrice(packageWeight, distance));
  }, [packageWeight, distance]);

  const handlePackageWeightChange = (value) => {
    setPackageWeight(value);
  };

  const handleCourierChange = (event) => {
    setCourier(event.target.value);
  };

  const handleStartingPortChange = (event) => {
    setStartingPort(event.target.value);
    updateDistance(event.target.value, destinationPort);
  };

  const handleDestinationPortChange = (event) => {
    setDestinationPort(event.target.value);
    updateDistance(startingPort, event.target.value);
  };

  const updateDistance = (start, end) => {
    if (start && end) {
      const newDistance = PORT_DISTANCES[start][end];
      setDistance(newDistance);
    } else {
      setDistance(0);
    }
  };

  const handleSubmitOrder = () => {
    onCreateOrder(packageWeight, courier, startingPort, destinationPort);
  };

  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const handleTrackOrder = () => {
    onTrackOrder(orderId);
  };

  return (
    <div className="Dashboard">
      <h2>Create Order</h2>
      <div className="form-group">
        <label htmlFor="packageWeight">
          Package Weight: {packageWeight} kg
        </label>
        <input
          type="range"
          id="packageWeight"
          className="form-control"
          min="0"
          max="100"
          value={packageWeight}
          onChange={(e) => handlePackageWeightChange(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="courier">Courier:</label>
        <select
          id="courier"
          className="form-control"
          value={courier}
          onChange={handleCourierChange}
        >
          <option value="">Select a courier</option>
          {COURIERS.map((c, index) => (
            <option key={index} value={c.address}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <SelectPort
        label="Starting Port:"
        value={startingPort}
        onChange={handleStartingPortChange}
      />
      <SelectPort
        label="Destination Port:"
        value={destinationPort}
        onChange={handleDestinationPortChange}
      />
      <div>
        <p>Distance: {distance} km</p>
        <p>Price: {price.toFixed(2)}$CRGO</p>
</div>
<button
className="btn btn-primary"
onClick={handleSubmitOrder}
disabled={!packageWeight || !courier || !startingPort || !destinationPort}
>
Create Order
</button>
<h2>Track Order</h2>
<div className="form-group">
<label htmlFor="orderId">Order ID:</label>
<input
       type="text"
       id="orderId"
       className="form-control"
       value={orderId}
       onChange={handleOrderIdChange}
     />
</div>
<button
     className="btn btn-secondary"
     onClick={handleTrackOrder}
     disabled={!orderId}
   >
Track Order
</button>
</div>
);
}

export default Dashboard;
