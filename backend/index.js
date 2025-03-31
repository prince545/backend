import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables first

import foodRouter from './routes/foodRoute.js';
import { connectDB } from './config/db.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Fix for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// API Routes
app.use('/api/foods', foodRouter);

// Test Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
