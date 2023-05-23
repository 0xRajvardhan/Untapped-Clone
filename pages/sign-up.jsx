import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from 'react';

const SignUp = () => {

    const [enableSubmit, setEnableSubmit] = useState(true);


    const [errors, setErrors] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (firstName && lastName && email && password) {
            setEnableSubmit(false);
        } else {
            setEnableSubmit(true);
        }
    }, [firstName, lastName, email, password]);

    //  Form validation
    const validateForm = () => {
        const errors = {};
        let isValid = true;

        // Validate firstName
        if (!firstName) {
            errors.firstName = 'First name is required';
            isValid = false;
        }

        // Validate lastName
        if (!lastName) {
            errors.lastName = 'Last name is required';
            isValid = false;
        }

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

            <Image src="/images/loginLogo.svg" alt="logo" width={176.88} height={42} className="flex gap-6 items-center top-[2.75rem] left-[2.75rem] absolute" />


            <div className="flex min-h-screen">


                <div className="w-[65%] border-r flex">

                    <div className="w-[26.25rem] h-max px-6 pb-12 pt-[82px] mx-auto flex flex-col">
                        <h1 className="title_font font-semibold text-5xl mt-[18px] py-[6px]">Sign up</h1>
                        <p className="font-inter text-base text=[0E0E0E] my-3">Find jobs, events, and communities that celebrate your unique background and experiences.</p>
                        <p className="font-inter text-sm text-[#666666] my-1">Not a candidate? <span className="text-[#3365E6] font-semibold"><Link href="/sign-up">Sign up as a recruiter</Link></span></p>

                        {/* Google Button  */}
                        <Link href="/home">
                            <div className="flex justify-evenly items-center border rounded border-black h-10 w-full px-4 mt-5 hover:shadow-lg duration-200">
                                <Image src="/images/google.png" alt="g" width={14.46} height={15} className="my-2 mr-auto" />
                                <p className="font-inter font-semibold text-sm text-[#0E0E0E] mr-[6rem]">Continue with Google</p>
                            </div>
                        </Link>

                        <div className="flex justify-between items-center mt-[26.5px] w-full">
                            <hr className="w-[46%] bg-[#dadada] p-[0.5px]" /><p className="text-[#666] text-sm">or</p><hr className="w-[46%] bg-[#dadada] p-[0.5px]" />
                        </div>

                        {/* Form  */}
                        <div className="flex flex-col items-center mt-7">
                            <form className="w-full" onSubmit={handleSubmit}>
                                <div className="flex gap-6">
                                    <div className="mb-6">
                                        <label className="font-inter font-semibold text-sm text-[#0E0E0E]" >First name</label>
                                        <input className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded px-3 py-[11px] w-full mt-2`} type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
                                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                    </div>
                                    <div className="mb-6">
                                        <label className="font-inter font-semibold text-sm text-[#0E0E0E]" >Last name</label>
                                        <input className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded px-3 py-[11px] w-full mt-2`} type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />
                                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="font-inter font-semibold text-sm text-[#0E0E0E]" >Email Address</label>
                                    <input className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded px-3 py-[11px] w-full mt-2`} type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div className="mb-6">
                                    <label className="font-inter font-semibold text-sm text-[#0E0E0E]" >Password</label>
                                    <input className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} border-gray-300 rounded px-3 py-[11px] w-full mt-2`} type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>
                                <button className={`flex justify-center items-center w-full px-4 py-[10px] rounded-md bg-[#c9f270] hover:bg-[#daf996] hover:-translate-y-1 transition duration-500 mb-6 mt-9 text-sm font-semibold font-inter text-[#0E0E0E] ${enableSubmit ? 'bg-[#fafafa] text-[#dcdbda] hover:bg-[#fafafa] hover:-translate-y-0' : ' '}`} type="submit">
                                    Signup
                                </button>
                            </form>
                        </div>

                        <p className="font-inter text-sm text-[#666666] leading-5">By clicking “Sign up” or “Sign up with Google,” you’re agreeing to Untapped’s <span className="underline">Terms of Use</span>.</p>

                        <hr className="w-full bg-[#dadada] my-7" />


                        {/* Footer  */}
                        <div className="my-5">
                            <p className="font-inter text-sm text-[#666666]">Already have an Untapped account? <span className="text-[#3365E6] font-semibold underline"><Link href="/">Log in</Link></span></p>
                        </div>

                    </div>
                </div>
                <div className="w-[33.3rem] container bg-[url('/images/signupbanner.png')] relative bg-cover bottom-40 bg-[#dadada] bg-center" />
            </div>
        </>
    )
};


export default SignUp;