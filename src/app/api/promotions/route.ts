import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { title, description, validFrom, validTo } = await req.json();
    const cookiesObj = await cookies();
    const token = cookiesObj.get("token")?.value;
    const res = await fetch(`${process.env.SERVERBASE}/promotions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, validFrom, validTo }),
    });
    const result = await res.json();
    console.log("result", result);

    if (!res.ok || result.status !== "success") {
      return NextResponse.json(
        { success: false, message: result.message || "Add promotion failed" },
        { status: res.status }
      );
    }
    return NextResponse.json(result);
  } catch (err) {
    console.error("An error occurred:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const cookiesObj = await cookies();
    const token = cookiesObj.get("token")?.value;
    const res = await fetch(`${process.env.SERVERBASE}/promotions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    if (!res.ok || result.status !== "success") {
      return NextResponse.json(
        { success: false, message: result.message || "Get promotion failed" },
        { status: res.status }
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
