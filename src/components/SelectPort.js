// components/SelectPort.js
import React from 'react';
import { PORTS } from '../utils/constants';

const SelectPort = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">Select a port</option>
        {PORTS.map((port, index) => (
          <option key={index} value={index}>
            {port}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPort;
