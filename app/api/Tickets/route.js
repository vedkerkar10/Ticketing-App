import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log("POST");
    try {
        const body = await req.json();
        const ticketData = body.formData;
        // console.log(body);
        await Ticket.create(ticketData);

        return NextResponse.json({ message: "Ticket Created" }, { status: 201 })

    }
    catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}