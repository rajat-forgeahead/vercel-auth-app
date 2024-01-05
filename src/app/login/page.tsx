"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { setCookie } from "cookies-next";
import { useTheme } from "next-themes";
import { phoneAuth, validateSMS } from '../helper/utils';
const Login = () => {
  const response = NextResponse.next();
  const router = useRouter();
  const [error, setError] = useState("");
  const[enableLogin,setEnableLogin]=useState(false);
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const darkModeClass = "text-white";
  const lightModeClass = "text-black";
  const [value, setValue] = useState({
    phone: '',
    otp: '',
  });
  const [user, setUser] = useState(null);
  const [isPhoneVerify, setIsPhoneVerify] = useState(false);

  // Conditionally set the text color class based on the current theme
  const textColorClass =
    currentTheme === "dark" ? darkModeClass : lightModeClass;
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router, currentTheme]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleCLick = async (e: any) => {
    e.preventDefault();
    phoneAuth(value.phone)
      .then((res:any) => {
        setUser(res.userId);
        setIsPhoneVerify(true);
      })
      .catch((e) => {
        alert('Error getting phone session!');
      });
  };
 
  const handleChange = (e:any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleValidatePhone = (e:any) => {
    e.preventDefault();
    validateSMS(user, value.otp)
      .then((res:any) => {
        setEnableLogin(true);
        alert(
          `User successfully verified using for user with ID ${res.userId}, country Code ${res.countryCode}, and expires on ${res.expire}`
        );
      })
      .catch((e:any) => {
        alert('Error validating session!', );
      });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) {
        setCookie("logged", "true");
        router.replace("/dashboard");
      }
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <section className=" dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src="/images/login.png" alt="logo" />
            <span className={textColorClass}>Login</span>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <p className="text-red-600 text-[16px] mb-4">
                  {error && error}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="/forget-password "
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-black"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className='rounded-xl w-96 p-7 shadow-xl'>
          <h1 className='text-xl font-bold mb-6 text-indigo-900 text-center'>
            Appwrite | Twilio Auth
          </h1>

          {isPhoneVerify ? (
            // Verify OTP using phone session
            <form >
              <fieldset className='mb-4'>
                <label className='text-sm block mb-2'>OTP</label>
                <input
                  className='h-10 border w-full rounded border-gray-400'
                  required
                  type='number'
                  name='otp'
                  onChange={handleChange}
                />
              </fieldset>
              <button onClick={handleValidatePhone} className='bg-indigo-900 w-full h-10 rounded font-semibold text-white hover:bg-indigo-700'>
                Validate OTP
              </button>
            </form>
          ) : (
            //Get Phone Session Form
            <form>
              <fieldset className='mb-4'>
                <label className='text-sm block mb-2'>Phone Number</label>
                <input
                  className='h-10 border w-full rounded border-gray-400'
                  required
                  type='tel'
                  name='phone'
                  onChange={handleChange}
                />
              </fieldset>
              <button onClick={handleCLick} className='bg-indigo-900 w-full h-10 rounded font-semibold text-white hover:bg-indigo-700'>
                Submit
              </button>
            </form>
          )}
        </div>
                <button
                disabled={!enableLogin}
                  type="submit"
                  className={`w-full h-10 rounded font-semibold text-white hover:bg-blue-700 
                  ${!enableLogin ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500'}`}
    >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
              {/* <p>or</p>
              <button
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                onClick={() => {
                  signIn("github");
                }}
              >
                Sign In with Github
              </button> */}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Login;
