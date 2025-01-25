package com.example.product.management.Service;

import com.example.product.management.Product.Product;
import com.example.product.management.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private static final Logger logger = LoggerFactory.getLogger(ProductService.class);

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Fetch all products
    public List<Product> findAll() {
        logger.info("Fetching all products");
        return productRepository.findAll();
    }

    // Save a new product or update an existing one
    public Product save(Product product) {
        if (product.getProductName() == null || product.getProductName().isEmpty()) {
            throw new IllegalArgumentException("Product name is required");
        }
        if (product.getPrice() <= 0) {
            throw new IllegalArgumentException("Price must be greater than zero");
        }

        logger.info("Saving product: {}", product);
        return productRepository.save(product);
    }

    // Find product by ID
    public Optional<Product> findById(Long id) {
        logger.info("Finding product with ID: {}", id);
        return productRepository.findById(id);
    }

    // Delete product by ID
    public void deleteById(Long id) {
        logger.info("Deleting product with ID: {}", id);
        productRepository.deleteById(id);
    }

    // Update existing product
    public Product update(Product product) {
        logger.info("Updating product: {}", product);
        return productRepository.save(product);
    }
}
