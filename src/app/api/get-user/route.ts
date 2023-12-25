import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: true, // Enable default bodyParser for handling JSON data
  },
};

export const GET = async (request:any, response:any) => {
  const { email } = request.query || {}; // Safely handle undefined query object

  if (!email) {
    return new NextResponse("Email parameter is missing", { status: 400 });
  }

  await connect();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Customize the user data to return as needed
    const userData = {
      email: user.email,
      bio: user.bio,
      phone_number: user.phone_number,
      address: user.address,
      country: user.country,
      city: user.city,
      state: user.state,
    };

    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (err:any) {
    return new NextResponse(err.message, { status: 500 });
  }
};
