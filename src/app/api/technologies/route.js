import { NextResponse } from "next/server";
import dbconnect from "../../../config/dbconnect";
import mongoose from "mongoose";
import Tech from "../../../models/techmodel"

export const GET = async (request) => {
  await dbconnect();

  try {
      if (!mongoose.connection.readyState) {
        throw new Error("Mongodb failed to connect!");
      }
    const tech = await Tech.find();
     return NextResponse.json({
       success: true,
       message: tech,
     });
    
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};
