import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = await params;

      const cookiesObj = await cookies();
    const token = cookiesObj.get("token")?.value;

    const res = await fetch(`${process.env.SERVERBASE}/admin/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();

    if (!res.ok || result.status !== "success") {
      return NextResponse.json(
        { success: false, message: result.message || "Delete admin failed" },
        { status: res.status }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.log("Error:", error);
    // return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
