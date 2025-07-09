# 🍕 Food E-Commerce Application

A full-stack food delivery e-commerce application built with React, Node.js, and MongoDB. This project consists of three main components: a customer-facing frontend, an admin panel, and a backend API.

## 📁 Project Structure

```
food-app/
├── food-app/          # Customer Frontend (React + Vite)
├── admin/             # Admin Panel (React + Vite)
├── backend/           # Backend API (Node.js + Express)
├── server/            # Additional server components
├── routes/            # Additional route definitions
└── src/               # Shared source components
```

## 🚀 Features

### Customer Frontend (`food-app/`)
- **Home Page**: Featured food items and categories
- **Menu**: Browse all available food items
- **Cart**: Add/remove items and manage orders
- **Place Order**: Complete checkout process
- **User Authentication**: Login/signup functionality
- **Responsive Design**: Mobile-friendly interface

### Admin Panel (`admin/vite-project/`)
- **Add Food Items**: Upload new food items with images
- **List Management**: View and manage all food items
- **Order Management**: Track and manage customer orders
- **Dashboard**: Overview of business metrics

### Backend API (`backend/`)
- **RESTful API**: Food management endpoints
- **Image Upload**: Multer middleware for file handling
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based user authentication
- **Payment Integration**: Stripe payment processing

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Axios** - HTTP client (admin panel)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload middleware
- **JWT** - Authentication
- **Stripe** - Payment processing
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd food-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=3000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/food-del
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
```

Start the backend server:
```bash
npm run dev
```

### 3. Customer Frontend Setup
```bash
cd food-app
npm install
```

Start the development server:
```bash
npm run dev
```

### 4. Admin Panel Setup
```bash
cd admin/vite-project
npm install
```

Start the admin panel:
```bash
npm run dev
```

## 🔧 API Endpoints

### Food Management
- `GET /api/foods/list` - Get all food items
- `POST /api/foods/upload` - Add new food item with image
- `POST /api/foods/remove` - Remove food item

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Orders
- `POST /api/orders/create` - Create new order
- `GET /api/orders/list` - Get all orders
- `PUT /api/orders/update` - Update order status

## 🗄️ Database Schema

### Food Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  countInStock: Number (required),
  category: String (required),
  imageUrl: String,
  timestamps: true
}
```

## 🎯 Usage

### For Customers
1. Visit the customer frontend (typically `http://localhost:5173`)
2. Browse food items and add them to cart
3. Complete checkout and place orders
4. Track order status

### For Administrators
1. Access the admin panel (typically `http://localhost:5174`)
2. Add new food items with images
3. Manage existing inventory
4. Process and track customer orders

## 🔒 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_your-stripe-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-key
```

## 📱 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend (both customer and admin)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB connection is accessible
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Simerjeet Singh

---

**Note**: Make sure to update the MongoDB connection string and other sensitive information in the `.env` file before deploying to production. 