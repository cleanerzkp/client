import React from 'react';

function PackageSizeSelection({ onSizeChange }) {
  return (
    <div className="package-size-selection">
      <input
        type="range"
        min="1"
        max="4"
        onChange={(event) => onSizeChange(event.target.value)}
      />
    </div>
  );
}

export default PackageSizeSelection;
