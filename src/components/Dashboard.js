import React, { useState } from 'react';
import { DELIVERY_SIZES, COURIERS, PORTS } from '../utils/constants';

function Dashboard(props) {
  const [packageSize, setPackageSize] = useState(DELIVERY_SIZES.SMALL);
  const [courier, setCourier] = useState('');
  const [startingPort, setStartingPort] = useState('');
  const [destinationPort, setDestinationPort] = useState('');
  const [orderId, setOrderId] = useState('');

  const handlePackageSizeChange = (e) => {
    setPackageSize(DELIVERY_SIZES[e.target.value]);
  };

  const handleCourierChange = (e) => {
    setCourier(e.target.value);
  };

  const handleStartingPortChange = (e) => {
    setStartingPort(e.target.value);
  };

  const handleDestinationPortChange = (e) => {
    setDestinationPort(e.target.value);
  };

  const handleOrderIdChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmitOrder = () => {
    props.onCreateOrder(packageSize, courier, startingPort, destinationPort);
  };

  const handleTrackOrder = () => {
    props.onTrackOrder(orderId);
  };

  return (
    <div className="Dashboard">
      <h2>Create Order</h2>
      <div className="form-group">
        <label htmlFor="packageSize">Package Weight Category:</label>
        <select
          id="packageSize"
          className="form-control"
          value={Object.keys(DELIVERY_SIZES).find(
            (key) => DELIVERY_SIZES[key] === packageSize
          )}
          onChange={handlePackageSizeChange}
        >
          {Object.entries(DELIVERY_SIZES).map(([key, value]) => (
            <option key={key} value={key}>
              {value.name} (up to {value.weightLimit} kg, ${value.rewardRate} CRGO)
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="courier">Select Courier:</label>
        <select
          id="courier"
          className="form-control"
          value={courier}
          onChange={handleCourierChange}
        >
          <option value="">Select a courier</option>
          {COURIERS.map((courier, index) => (
            <option key={index} value={courier.address}>
              {courier.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="startingPort">Starting Port:</label>
        <select
          id="startingPort"
          className="form-control"
          value={startingPort}
          onChange={handleStartingPortChange}
        >
          <option value="">Select a port</option>
          {PORTS.map((port, index) => (
            <option key={index} value={index}>
              {port.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="destinationPort">Destination Port:</label>
        <select
          id="destinationPort"
          className="form-control"
          value={destinationPort}
          onChange={handleDestinationPortChange}
        >
          <option value="">Select a port</option>
          {PORTS.map((port, index) => (
            <option key={index} value={index}>
              {port.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleSubmitOrder}
        disabled={!courier || !startingPort || !destinationPort}
      >
        Create Order
      </button>
      <hr />
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
        className="btn btn-primary"
        onClick={handleTrackOrder}
        disabled={!orderId}
      >
        Track Order
      </button>
    </div>
  );
}

export default Dashboard;
