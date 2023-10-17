import { productData } from "@/constants/data";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Products Featched Successfully",
      success: true,
      productData,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product Loading error",
      },
      { status: 500 }
    );
  }
};
