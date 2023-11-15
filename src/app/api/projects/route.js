import { NextResponse } from "next/server";
import Project from "../../../models/projectModel";
import dbconnect from "../../../config/dbconnect";

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
  const input = await request.json();
  try {
    await dbconnect();
    const newProject = new Project(input);
    const savedProject = await newProject.save();

    return NextResponse.json({
      success: true,
      project: savedProject,
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
