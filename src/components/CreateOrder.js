import React, { useState } from 'react';
import SelectPort from './SelectPort';

const CreateOrder = () => {
  const [startPortIndex, setStartPortIndex] = useState('');
  const [destinationPortIndex, setDestinationPortIndex] = useState('');

  const handleStartPortChange = (event) => {
    setStartPortIndex(event.target.value);
  };

  const handleDestinationPortChange = (event) => {
    setDestinationPortIndex(event.target.value);
  };

  return (
    <div>
      {/* Other form elements */}
      <SelectPort
        label="Starting Port:"
        value={startPortIndex}
        onChange={handleStartPortChange}
      />
      <SelectPort
        label="Destination Port:"
        value={destinationPortIndex}
        onChange={handleDestinationPortChange}
      />
      {/* Other form elements */}
    </div>
  );
};
