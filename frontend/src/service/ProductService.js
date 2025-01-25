import axios from "axios";

const BASE_URL = 'http://localhost:8080/Products'; 

const ProductService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(BASE_URL + '/');
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error("Error response from server:", error.response);
                console.error("Status:", error.response.status);
                console.error("Data:", error.response.data);
            } else if (error.request) {
                console.error("Error request:", error.request);
            } else {
                console.error("Error setting up request:", error.message);
            }
            throw error;
        }
    },

    getProductById: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw error;
        }
    },

    createProduct: async (product) => {
        try {
            const response = await axios.post(BASE_URL, product);
            return response.data;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error;
        }
    },

    updateProduct: async (id, product) => {
        try {
            const response = await axios.put(`${BASE_URL}/${id}`, product);
            return response.data;
        } catch (error) {
            console.error("Error updating product:", error);
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error;
        }
    }
};

export default ProductService;
