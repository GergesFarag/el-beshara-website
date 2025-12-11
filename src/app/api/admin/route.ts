import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, username, password } = await req.json();
    const cookiesObj = await cookies();
    const token = cookiesObj.get("token")?.value;
    const res = await fetch(`${process.env.SERVERBASE}/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, username, password }),
    });
    const result = await res.json();

    if (!res.ok || result.status !== "success") {
      return NextResponse.json(
        { success: false, message: result.message || "Add admin failed" },
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

export async function GET() {
  try {
    const cookiesObj = await cookies();
    const token = cookiesObj.get("token")?.value;
    const res = await fetch(`${process.env.SERVERBASE}/admin/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    console.log("result", result);

    if (!res.ok || result.status !== "success") {
      return NextResponse.json(
        { success: false, message: result.message || "Get admin failed" },
        { status: res.status }
      );
    }
    return NextResponse.json(result);
  } catch (error) {
    console.log("an error occurred", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}


