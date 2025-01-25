package com.example.product.management.Product;

import jakarta.persistence.*;
import lombok.Data;
import java.util.UUID;

@Entity
@Data
@Table(name = "ProductManagement")
public class Product {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String productName;
    private String description;
    private Double price;
    private String status;

}
