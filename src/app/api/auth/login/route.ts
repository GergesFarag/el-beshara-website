import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const responseMessages: Record<number, string> = {
    200: "Login successful",
    400: "Wrong email or password",
    500: "Server error during login",
    401: "Unauthorized access",
    403: "Forbidden access",
  };
  const response = await fetch(`${process.env.SERVERBASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();
  if (!response.ok || result.status !== "success") {
    return NextResponse.json(
      { message: result.message || "Login failed" },
      { status: response.status }
    );
  }

  const res = NextResponse.json(
    { message: "Login successful" },
    { status: 200 }
  );
  res.cookies.set("token", result.data, {
    httpOnly: true,
    // secure: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return res;
}
