import { client } from "@repo/db/client";
import { NextResponse } from "next/server.js";

export async function GET() {
    try {
        const users = await client.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch users' },
            { status: 500 }
        );
    }
} 