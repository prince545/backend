import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://prince:59VuKaZDu%21QR8VN@cluster0.srrrl6l.mongodb.net/food-del')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
};
