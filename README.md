# 🍕 Food E-Commerce Application

A full-stack food delivery e-commerce application built with modern web technologies. This project consists of three main applications: a customer-facing frontend, an admin panel, and a backend API, providing a complete solution for food ordering and management.

## 📁 Project Structure

```
food-app/
├── food-app/                    # Customer Frontend (React + Vite)
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── AnimatedQuotes/  # Animated motivational quotes
│   │   │   ├── App Download/    # App download section
│   │   │   ├── Food/            # Food display components
│   │   │   ├── FoodItem/        # Individual food item cards
│   │   │   ├── Header/          # Hero section with call-to-action
│   │   │   ├── Login/           # Authentication popup
│   │   │   ├── Menu/            # Food menu with filtering
│   │   │   ├── Navbar/          # Navigation with search & filters
│   │   │   └── pages/           # Page components
│   │   │       ├── Cart/        # Shopping cart page
│   │   │       ├── Home/        # Landing page
│   │   │       └── PlaceOrder/  # Checkout page
│   │   ├── context/             # React Context for state management
│   │   └── assets/              # Static assets and data
│   └── public/                  # Public static files
├── admin/vite-project/          # Admin Panel (React + Vite)
│   ├── src/
│   │   ├── components/          # Admin UI components
│   │   │   ├── Navbar/          # Admin navigation
│   │   │   ├── Sidebar/         # Admin sidebar menu
│   │   │   └── Toast/           # Toast notifications
│   │   ├── pages/               # Admin pages
│   │   │   ├── Add/             # Add food items
│   │   │   ├── List/            # List all food items
│   │   │   └── Orders/          # Order management
│   │   └── admin_assets/        # Admin-specific assets
│   └── public/                  # Public admin assets
├── backend/                     # Backend API (Node.js + Express)
│   ├── config/                  # Database configuration
│   ├── controller/              # Request handlers
│   ├── models/                  # Database models
│   ├── routes/                  # API routes
│   ├── uploads/                 # File upload directory
│   └── middleware/              # Custom middleware
├── server/                      # Additional server components
├── routes/                      # Additional route definitions
└── frontend/                    # Legacy frontend components
```

## 🚀 Features

### Customer Frontend (`food-app/`)
- **🏠 Home Page**: Featured food items, categories, and call-to-action sections
- **🍽️ Menu**: Browse all available food items with advanced filtering and sorting
- **🔍 Search & Filter**: Real-time search and category-based filtering
- **🛒 Shopping Cart**: Add/remove items with quantity management
- **📱 Place Order**: Complete checkout process with order summary
- **👤 User Authentication**: Login/signup functionality with popup modal
- **💬 Animated Quotes**: Motivational quotes with floating animation
- **📱 Responsive Design**: Mobile-first responsive interface
- **🎨 Modern UI**: Clean, modern design with smooth animations

### Admin Panel (`admin/vite-project/`)
- **➕ Add Food Items**: Upload new food items with images and details
- **📋 List Management**: View, search, and manage all food items
- **📦 Order Management**: Track and manage customer orders
- **📊 Dashboard**: Overview of business metrics and operations
- **🔔 Toast Notifications**: Real-time feedback for user actions
- **📁 File Upload**: Image upload with preview functionality

### Backend API (`backend/`)
- **🔗 RESTful API**: Comprehensive food management endpoints
- **📸 Image Upload**: Multer middleware for file handling
- **🗄️ Database**: MongoDB with Mongoose ODM
- **🔐 Authentication**: JWT-based user authentication system
- **💳 Payment Integration**: Stripe payment processing
- **🛡️ Security**: Password hashing with bcrypt
- **🌐 CORS Support**: Cross-origin resource sharing enabled

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