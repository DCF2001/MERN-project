// ResearchProductMarketplace.js

import React, { useState, useEffect } from 'react';

export default function ResearchProductMarketplace() {
  const [researches, setResearches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function fetchResearches() {
      try {
        const response = await fetch('/api/research/products');
        if (!response.ok) {
          const errorMessage = `Failed to fetch research products: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        const initializedResearches = data.map(research => ({
          ...research,
          currentPictureIndex: 0
        }));
        setResearches(initializedResearches);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchResearches();
  }, []);

  const addToCart = (research) => {
    setCartItems([...cartItems, research]);
  };

  const removeItemFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 text-green-800'>Research Product Marketplace</h1>
      <span className='text-lg text-green-700 mb-10 block text-center'>Welcome to the Research Product Marketplace: Where innovative research findings are offered for sale to address challenges and advance various fields.</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {researches.map((research, index) => (
          <div
            key={index}
            className="relative border border-gray-300 rounded p-4"
          >
            <img src={research.imgUrls[research.currentPictureIndex]} alt="Research product" className="w-full h-60 object-cover rounded mb-4" />
            <div>
              <h3 className="text-lg font-semibold mb-2">{research.title}</h3>
              <p className="text-gray-600 mb-2">Price: ${research.price}</p>
              <p className="text-gray-600 mb-2">Importance: {research.importance}</p>
              <div className="flex justify-between">
                <button onClick={() => addToCart(research)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2">Add to Cart</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {showCart && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            <button className="absolute top-4 right-4 bg-white font-bold" onClick={() => setShowCart(false)}>Close</button>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <div>
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <li key={index} className="py-2">
                      <div className="flex items-center justify-between">
                        <p>{item.title}</p>
                        <button className="text-red-500" onClick={() => removeItemFromCart(index)}>Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4">Pay Now</button>
              </div>
            )}
          </div>
        </div>
      )}

      <button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md" onClick={() => setShowCart(true)}>View Cart ({cartItems.length})</button>
    </main>
  );
}
