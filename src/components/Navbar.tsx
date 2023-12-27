"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { deleteCookie } from "cookies-next";
import {UserContext } from "@/utils/userContext"
import { useTheme } from 'next-themes';
const Navbar = () => {
  const { photoChanged } = useContext(UserContext);
  const { data: session } = useSession();
  const [imageSrc, setImageSrc] = useState("");
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {

    let userImg = session?.user?.email;
    const storedImage = localStorage.getItem(userImg||""); // Replace 'myImage' with your key
    // Update state with the image string
    if (storedImage) {
      setImageSrc(storedImage);
    }
    if (photoChanged) {
      console.log("changed jfsd")
      const Image:any = localStorage.getItem(userImg||"")
      setImageSrc(Image);
      
    }
  }, [session,photoChanged]);
  return (
    <div className="">
      
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
          <li> {currentTheme === 'dark' ? (
            <button
              className="bg-black-700 hover:bg-black w-20 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme('light')}
            >
              {' '}
              <img src="/images/sun.png" alt="logo" height="50px" width="50px" />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-20 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme('dark')}
            >
              <img src="/images/moon.png" alt="logo" height="50px" width="50px" />
            </button>
          )}</li>
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
