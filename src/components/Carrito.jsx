import React, { useState } from 'react';

const Carrito = () => {
  const [numItems, setNumItems] = useState(0);

  const handleIncrement = () => {
    setNumItems(numItems + 1);
  };

  return (
    <div className="carrito">
      <button onClick={handleIncrement}>🛒: {numItems} items</button>
    </div>
  );
};

export default Carrito;