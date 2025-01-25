# Product Management App

A Full-Stack CRUD (Create, Read, Update, Delete) application for managing products, built using **Spring Boot** for the backend and **React** for the frontend.

---

## Features

- Add, view, edit, and delete products.
- Store product information including name, description, price, and category.
- Backend: RESTful APIs developed using **Spring Boot** with **MySQL** as the database.
- Frontend: User interface built using **React** .

---

## Tech Stack

### Backend
- **Spring Boot**: Backend framework for REST APIs.
- **MySQL**: Relational database to store product data.
- **Spring Data JPA**: For database interactions

### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: To handle API calls.
- **Bootstrap**: For styling and responsive design.

---

## Prerequisites

- **Java** (JDK 17 or higher)
- **Node.js** (v14 or higher)
- **MySQL** (v8 or higher)
- Maven (for managing backend dependencies)

---

## Installation & Setup

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-management-app.git
   cd product-management-app/backend
   ```

2. Configure the database:
   - Update the `application.properties` file in the `src/main/resources` folder with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/product_management
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     spring.jpa.hibernate.ddl-auto=update
     ```

3. Build and run the backend:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## API Endpoints

### Product Management
- `GET /api/products`: Retrieve all products.
- `GET /api/products/{id}`: Retrieve a single product by ID.
- `POST /api/products`: Add a new product.
- `PUT /api/products/{id}`: Update a product by ID.
- `DELETE /api/products/{id}`: Delete a product by ID.

---

## Folder Structure

### Backend
```
backend/
├── src/main/java
│   ├── com.example.productmanagement
│       ├── controller
│       ├── model
│       ├── repository
│       └── service
├── src/main/resources
│   ├── application.properties
└── pom.xml
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   │   ├── AddProduct
│   │   │   ├── AddProduct.jsx
│   │   │   └── AddProduct.css
│   │   ├── EditProduct
│   │   ├── ProductList
│   │   └── ProductDetails
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── package.json
```

---


## Future Enhancements
- Add user authentication using Spring Security and JWT.
- Implement advanced filtering and search features.
- Add pagination for large datasets.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an issue to suggest improvements.
