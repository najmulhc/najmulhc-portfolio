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
    const technologies = await Tech.find();
     return NextResponse.json({
       success: true,
      technologies,
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


export const POST = async  (request) => {
  const input = await request.json();
  try { 
    await dbconnect();
    const newTech = new Tech(input);
    const savedTech = await newTech.save();

     return NextResponse.json({
      success: true, 
      tech: savedTech
     }, {status: 200})
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}