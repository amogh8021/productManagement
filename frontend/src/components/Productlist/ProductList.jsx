import React, { useEffect, useState } from 'react';
import ProductService from '../../service/ProductService'; // Ensure correct import path

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state
  const [error, setError] = useState(null);     // Optional error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getAllProducts(); // Assuming this returns product data
        setProducts(response); // Check if 'response.data' or just 'response'
      } catch (error) {
        console.error("Unable to load products:", error);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Status: {product.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
