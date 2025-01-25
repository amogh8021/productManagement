import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import ProductService from '../../service/ProductService';

const AddProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: "Available",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.productName || !product.description || !product.price || !product.status) {
            alert("Please fill out all fields.");
            return;
        }
        if (Number(product.price) < 0) {
            alert("Price must be a positive number.");
            return;
        }

        setIsLoading(true);
        ProductService
            .createProduct(product)
            .then((res) => {
                setMessage("Product added successfully");
                setProduct({ productName: "", description: "", price: "", status: "Available" }); // Reset form
            })
            .catch((error) => {
                setMessage("Error adding product. Please try again.");
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="form-container">
            <h1 className="form-heading">Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Enter Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        name="productName"
                        value={product.productName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Enter Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productDescription"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Enter Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productPrice"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productStatus" className="form-label">Select Status</label>
                    <select
                        className="form-control"
                        id="productStatus"
                        name="status"
                        value={product.status}
                        onChange={handleChange}
                    >
                        <option value="Available">Available</option>
                        <option value="Out of Stock">Out of Stock</option>
                        <option value="Discontinued">Discontinued</option>
                    </select>
                </div>
                <button type="submit" className="btn-submit" disabled={isLoading}>
                    {isLoading ? "Submitting..." : "Submit"}
                </button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

// ProductList Component to fetch and display all products
const ProductList = () => {
    const [products, setProducts] = useState([]);

    // useEffect to fetch products when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductService.getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error("Unable to load products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.productName}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Status: {product.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddProduct;
