import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
    if (isConnected) {
        console.log("Using existing connection");
        return;
    }

    try {
        const uri = process.env.MONGODB_URI!;
        const db = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
        })
        isConnected = db.connections[0].readyState === 1;
        console.log("Connected to database");
    }
    catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1);
    }
}