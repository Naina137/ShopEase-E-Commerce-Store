ShopEase – E-Commerce Store

ShopEase is a responsive e-commerce web application designed to provide a simple and user-friendly online shopping experience.

The application allows users to browse products, search and filter products, sort products, view stock information, and manage items in a shopping cart.

This project was developed as part of my hands-on learning journey in Full Stack Web Development, with the goal of understanding how a frontend application communicates with a backend REST API and database.

Features

- Dynamic product listing
- Product search
- Category-based filtering
- Product sorting by price and name
- Add products to cart
- Increase and decrease product quantity
- Remove products from cart
- Automatic cart total calculation
- Product stock information
- REST API integration
- MongoDB database integration
- Responsive user interface

Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js
- REST API

Database

- MongoDB Atlas

Deployment and Tools

- Git
- GitHub
- GitHub Pages
- Render

Project Architecture

User
  |
  v
Frontend
HTML + CSS + JavaScript
  |
  | REST API Request
  v
Node.js + Express.js
  |
  | MongoDB Query
  v
MongoDB Atlas
  |
  v
Product Data

Project Structure

E-Commerce-store/
│
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productsRoutes.js
│   └── server.js
│
├── scripts/
│   └── script.js
│
├── index.html
├── style.css
├── package.json
├── .gitignore
└── README.md

How It Works

1. Product information is stored in MongoDB Atlas.
2. The Node.js and Express.js backend provides product data through REST API endpoints.
3. The frontend sends requests to the deployed backend API.
4. JavaScript fetches the product data and displays it dynamically.
5. Users can search, filter, and sort products.
6. Users can add products to the shopping cart.
7. Users can increase, decrease, or remove cart items.
8. The cart automatically calculates the total amount.

API Endpoints

Get All Products

GET /api/products

Get a Single Product

GET /api/products/:id

Add a Product

POST /api/products

Delete a Product

DELETE /api/products/:id

Live Demo

Frontend:
https://naina137.github.io/ShopEase-E-Commerce-Store/

Backend API:
https://shopease-e-commerce-store.onrender.com/api/products

Getting Started

Clone the Repository

git clone https://github.com/Naina137/ShopEase-E-Commerce-Store.git

Navigate to the Project

cd ShopEase-E-Commerce-Store

Frontend

Open "index.html" using a browser or a local development server.

Backend

Install the required dependencies:

npm install

Configure the MongoDB connection using environment variables and start the server:

npm start

Environment Variables

Create a ".env" file for the backend and configure the MongoDB connection.

MONGODB_URI=your_mongodb_connection_string
PORT=5000

Do not upload the ".env" file or database credentials to GitHub.

Future Improvements

- User authentication and authorization
- Product details page
- Wishlist functionality
- Order management
- Payment gateway integration
- Persistent shopping cart
- Admin dashboard
- Product image management
- Order history

Author

Naina Kumari

Data Science Undergraduate | Machine Learning Enthusiast | Data Analyst

This project was developed as part of my hands-on learning journey in Data Science and Machine Learning, with the goal of understanding the complete process of developing, evaluating, and deploying a Machine Learning application.

Connect with Me

- GitHub: https://github.com/Naina137
- LinkedIn: https://www.linkedin.com/in/naina-kumari-06373132b
- Live Project: https://naina137.github.io/ShopEase-E-Commerce-Store/

---

If you find this project useful, feel free to explore the repository.
