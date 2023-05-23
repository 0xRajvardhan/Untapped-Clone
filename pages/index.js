import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from 'react';

export default function Home() {

  const [enableSubmit, setEnableSubmit] = useState(true);


  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (email && password) {
      setEnableSubmit(false);
    } else {
      setEnableSubmit(true);
    }
  }, [email, password]);

  //  Form validation
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate email
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate password
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation
    if (validateForm()) {
      // Submit the form or perform other actions here
      console.log('Form submitted successfully');
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-[26.25rem] white border-r">
          <div className="w-full h-max px-11 pb-12 pt-9">
            <Image src="/images/loginLogo.svg" alt="logo" width={176.88} height={42} />
            <h1 className="title_font font-semibold text-5xl mt-[18px] py-[6px]">Log in</h1>
            <p className="font-inter text-sm text=[0E0E0E] my-6">Need an Untapped account? <span className="text-[#3365E6] font-semibold"><Link href="/sign-up">Sign up</Link></span></p>

            {/* Google Button  */}
            <Link href="/home">
              <div className="flex justify-evenly items-center border rounded border-black h-10 w-[20.6rem] px-4 hover:shadow-lg  duration-200">
                <Image src="/images/google.png" alt="g" width={14.46} height={15} className="my-2 mr-auto" />
                <p className="font-inter font-semibold text-sm text-[#0E0E0E] mr-[4.6rem]">Continue with Google</p>
              </div>
            </Link>

            <div className="flex justify-between items-center mt-6 w-[20.75rem]">
              <hr className="w-[46%] bg-[#dadada] p-[0.5px]" /><p className="text-[#666] text-sm">or</p><hr className="w-[46%] bg-[#dadada] p-[0.5px]" />
            </div>

            {/* Form  */}
            <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
              <div className="flex flex-col mb-7">
                <label htmlFor="email" className="font-inter font-semibold text-sm text-[#0E0E0E] mt-3">Your Email</label>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black mt-2`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="flex flex-col mb-8">
                <label htmlFor="password" className="font-inter font-semibold text-sm text-[#0E0E0E]">Password</label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black mt-2`}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className={`${enableSubmit ? 'bg-[#fafafa] text-[#dcdbda] hover:bg-[#fafafa] hover:-translate-y-0' : ' '} flex justify-center items-center px-4 py-[10px] rounded-md bg-[#c9f270] hover:bg-[#daf996] hover:-translate-y-1 transition duration-500 my-4 text-sm font-semibold font-inter text-[#0E0E0E]`}
              >
                Log In
              </button>

            </form>

            <hr className="w-full bg-[#dadada] mt-7" />

            {/* Footer  */}
            <div className="my-5">
              <p className="font-inter text-sm text-[#666666]">Forgot your password? <span className="text-[#3365E6] font-semibold">Recover password</span></p>
            </div>

          </div>
        </div>
        <div className="w-[69.75rem] container bg-[url('/images/loginbanner.png')] bg-center 2xl:w-[85rem]" />
      </div>
    </>
  )
};