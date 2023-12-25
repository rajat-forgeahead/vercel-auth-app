"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { deleteCookie } from "cookies-next";

const Navbar = () => {
  const { data: session } = useSession();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    let userImg = session?.user?.email;
    const storedImage = localStorage.getItem(userImg||""); // Replace 'myImage' with your key
    // Update state with the image string
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, [session]);
  return (
    <div className="bg-white shadow-md">
      {" "}
      {/* Added shadow */}
      <ul className="flex justify-between m-5 items-center h-16">
        {" "}
        {/* Reduced height */}
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {" "}
          {/* Adjusted gap and centered items */}
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
          {!session ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/user-profile">
              <span>{session.user?.email}</span> {/* Used span for email */}
              <li>
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={`data:image/png;base64,${imageSrc}`}
                  alt="Bordered avatar"
                />
              </li>
              </Link>
              
              <li>
                <button
                  onClick={() => {
                    deleteCookie("logged");
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full text-white"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
