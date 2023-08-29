import { NextResponse } from "next/server";

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
