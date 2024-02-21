// Custom input component to display only the delivery_price field
import React from 'react';

const WilayaPreview = ({ value }) => {
  // Ensure that value is defined and contains the delivery_price field
  if (value && value.delivery_price) {
    return (
      <div>
        <p>{value.delivery_price}</p>
      </div>
    );
  }

  return <p>No delivery price available</p>;
};

export default WilayaPreview;
