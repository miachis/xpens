import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json();
	console.log(body);
	return NextResponse.json(
		{ status: "done" },
		{
			status: 200,
		},
	);
}

// esure the request comes from mono
