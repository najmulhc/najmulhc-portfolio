import mongoose from "mongoose";
const dbconnect = async () => {
  try {
    if(!mongoose.connection.readyState){
    await mongoose
      .connect(
        "mongodb+srv://najmulhudachowdhury:ZMwX2guxAjauZMGZ@portfoliocluster.pzx1mdh.mongodb.net/?retryWrites=true&w=majority"
      );
    } else {
        console.log("Mongodb already connected!");
    }
   
  } catch (error) {
    console.log("Mongodb connection error", error.message);
  }
};

export default dbconnect;
