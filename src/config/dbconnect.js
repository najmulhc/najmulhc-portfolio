import mongoose from "mongoose";
const dbconnect = async () => {
  try {
    if (!mongoose.connection.readyState) {
      await mongoose.connect(process.env.CONNECTION_URI);
      console.log("Connected with mongodb");
    } else {
      console.log("Mongodb already connected!");
    }
  } catch (error) {
    console.log("Mongodb connection error", error.message);
  }
};

export default dbconnect;
