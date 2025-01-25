package com.example.product.management.WebCOnfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



    @Configuration
    public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                    .allowedOrigins("http://localhost:5173", "http://localhost:5175","http://localhost:5174") // Allow your frontend's origin
                    .allowedMethods("GET", "POST", "PUT", "DELETE") // Specify allowed HTTP methods
                    .allowedHeaders("*")
                    .allowCredentials(true);
        }
    }