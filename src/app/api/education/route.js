import { NextResponse } from "next/server";
import dbconnect from '../../../config/dbconnect'
import Education  from '../../../models/educationModel'

export const GET = (request) => {
  try {
    return NextResponse.json({
      success: true,
      message: "Data from the backend",
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

export const POST = async (request) => {
  try {
    await dbconnect();
    const body = await request.json();
    const newEducation = new Education(body);
    const savedEducation = await newEducation.save();
    return NextResponse.json(
      {
        success: true,
        education: savedEducation,
      },
      { status: 200 }
    );
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
