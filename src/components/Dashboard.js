import React, { useState } from 'react';
import { DELIVERY_SIZES } from '../utils/constants';

function Dashboard(props) {
  const [packageSize, setPackageSize] = useState(DELIVERY_SIZES.SMALL.value);
  const [courier, setCourier] = useState('');
  const [startingPort, setStartingPort] = useState(0);
  const [destinationPort, setDestinationPort] = useState(1);

  const handleCreateOrder = (e) => {
    e.preventDefault();
    props.onCreateOrder(packageSize, courier, startingPort, destinationPort);
  };

  const handlePackageSizeChange = (e) => {
    setPackageSize(e.target.value);
  };

  const handleCourierChange = (e) => {
    setCourier(e.target.value);
  };

  const handleStartingPortChange = (e) => {
    setStartingPort(parseInt(e.target.value));
  };

  const handleDestinationPortChange = (e) => {
    setDestinationPort(parseInt(e.target.value));
  };

  return (
    <div className="Dashboard">
      <h2>Create Order</h2>
      <form onSubmit={handleCreateOrder}>
        <div className="form-group">
          <label htmlFor="packageSize">Package Size:</label>
          <select
            id="packageSize"
            className="form-control"
            value={packageSize}
            onChange={handlePackageSizeChange}
          >
            {Object.values(DELIVERY_SIZES).map((size) => (
              <option key={size.value} value={size.value}>
                {size.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courier">Courier:</label>
          <input
            type="text"
            id="courier"
            className="form-control"
            value={courier}
            onChange={handleCourierChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startingPort">Starting Port:</label>
          <select
            id="startingPort"
            className="form-control"
            value={startingPort}
            onChange={handleStartingPortChange}
          >
            {props.portNames.map((port, index) => (
              <option key={index} value={index}>
                {port}
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
            {props.portNames.map((port, index) => (
              <option key={index} value={index}>
                {port}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Order
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
