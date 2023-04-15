import React from 'react';

function PackageSizeSelection({ packageWeight, onWeightChange }) {
  return (
    <div className="package-size-selection">
      <label htmlFor="packageWeight">Package Weight:</label>
      <input
        type="range"
        id="packageWeight"
        min="1"
        max="100"
        value={packageWeight}
        onChange={(event) => onWeightChange(event.target.value)}
      />
      <p>{packageWeight} kg</p>
    </div>
  );
}

export default PackageSizeSelection;
