import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDb conencted ${connection.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection error:", error);
  }
};
