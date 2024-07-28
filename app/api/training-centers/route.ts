// app/api/training-centers/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import FAQ from "../../../models/FAQ";

export async function GET() {
  await dbConnect();

  try {
    const centers = await FAQ.find({});
    return NextResponse.json(centers);
  } catch (error) {
    return NextResponse.error(); // Remove the argument from the function call
  }
}
