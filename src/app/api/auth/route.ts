import { NextResponse } from "next/server";
import users from "../mock/users.constants";

export async function GET() {
    return NextResponse.json({});
}

export async function POST(request: Request) {
    const { username, password }: Partial<AuthRequest> = await request.json();
    if (!username || !password) {
        return NextResponse.json({
            "status": 403,
            "message": "Missing required data field(s)"
        })
    }
    const index = users.findIndex((user) => (user.username === username && user.password === password));
    if (index >= 0) {
        return NextResponse.json({ ...users[index] }, { status: 200 })
    }
    else{
        return NextResponse.json({message:'Unauthorized user'},{status:401})
    }
}