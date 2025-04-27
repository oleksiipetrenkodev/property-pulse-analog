import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If DB is already connected, return
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  // Connect ot MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
