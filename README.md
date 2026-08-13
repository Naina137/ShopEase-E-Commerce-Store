# ShopEase - E-Commerce Store

A full-stack e-commerce web application designed to provide a simple, responsive, and user-friendly online shopping experience.

ShopEase allows users to browse products, search and filter products, sort products by price or name, view product stock, and manage items through a dynamic shopping cart.

## 📌 About This Project

ShopEase is a full-stack e-commerce project developed to understand how a modern web application connects the frontend, backend REST API, and database.

The frontend is built using HTML, CSS, and JavaScript, while the backend is powered by Node.js and Express.js. MongoDB Atlas is used for storing and managing product data.

This project was developed as part of my hands-on learning journey in Full Stack Web Development, with a focus on building, connecting, and deploying a real-world application.

---

## ✨ Features

- Dynamic product listing
- Product search
- Category-based filtering
- Product sorting by price and name
- Price sorting from low to high
- Price sorting from high to low
- Alphabetical product sorting
- Product stock information
- Add to cart functionality
- Increase and decrease cart quantity
- Remove products from cart
- Automatic cart total calculation
- REST API integration
- MongoDB database integration
- Responsive user interface

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB
- MongoDB Atlas

### Tools and Deployment

- Git
- GitHub
- GitHub Pages
- Render
- Visual Studio Code

---

## 🏗️ Project Architecture

```text
                         ShopEase E-Commerce Store

                                  User
                                   |
                                   v
                          Frontend Application
                       HTML + CSS + JavaScript
                                   |
                                   | REST API Request
                                   v
                           Node.js + Express.js
                                   |
                                   | Database Query
                                   v
                              MongoDB Atlas
                                   |
                                   v
                              Product Data
```

---

## ⚙️ How the Application Works

1. Product information is stored in MongoDB Atlas.
2. The Node.js and Express.js backend connects to MongoDB.
3. The backend provides product data through REST API endpoints.
4. The frontend communicates with the backend using JavaScript.
5. Product data is fetched dynamically and displayed on the website.
6. Users can search for products and filter them by category.
7. Products can be sorted by price or name.
8. Users can add products to the shopping cart.
9. Cart quantities can be increased or decreased.
10. Products can be removed from the cart.
11. The cart automatically calculates the total price.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Add a new product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 📂 Project Structure

```text
E-Commerce-store/
│
├── backend/
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productsRoutes.js
│   │
│   └── server.js
│
├── index.html
├── script.js
├── style.css
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🌐 Live Demo

### Frontend

https://naina137.github.io/ShopEase-E-Commerce-Store/

### Backend API

https://shopease-e-commerce-store.onrender.com/api/products

---

## 💻 GitHub Repository

https://github.com/Naina137/ShopEase-E-Commerce-Store

---

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Naina137/ShopEase-E-Commerce-Store.git
cd ShopEase-E-Commerce-Store
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file for the backend and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Keep your database credentials private and never upload the `.env` file to GitHub.

### 4. Start the Backend

```bash
npm start
```

### 5. Run the Frontend

Open `index.html` using VS Code Live Server or another local development server.

---

## ☁️ Deployment

ShopEase uses the following deployment setup:

- **Frontend:** GitHub Pages
- **Backend:** Render
- **Database:** MongoDB Atlas

The frontend communicates with the deployed backend through REST API requests.

---

## 🔮 Future Improvements

- User authentication and authorization
- Login and registration
- Product details page
- Wishlist functionality
- Persistent shopping cart
- Order management
- Payment gateway integration
- Admin dashboard
- Product reviews and ratings
- Order history
- Product image management
- Improved mobile responsiveness

---

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Building a full-stack web application
- Creating and consuming REST APIs
- Connecting Node.js and Express.js with MongoDB
- Working with MongoDB Atlas
- Fetching dynamic data using JavaScript
- Implementing search, filtering, and sorting functionality
- Managing shopping cart functionality
- Using Git and GitHub for version control
- Deploying frontend and backend applications
- Understanding frontend-backend communication

---

## 👩‍💻 Author

**Naina Kumari**

Data Science Undergraduate | Machine Learning Enthusiast | Data Analyst

This project was developed as part of my hands-on learning journey in Full Stack Web Development, Data Science, and Machine Learning, with the goal of understanding the complete process of designing, developing, connecting, and deploying a real-world application.

### 🔗 Connect with Me

**GitHub:**  
https://github.com/Naina137

**LinkedIn:**  
https://www.linkedin.com/in/naina-kumari-06373132b

**Live Project:**  
https://naina137.github.io/ShopEase-E-Commerce-Store/

---

If you find this project useful, feel free to explore the repository.
