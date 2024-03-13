import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState(""); // Fixed variable name consistency
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassword] = useState(""); // Fixed variable name consistency

    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName("");
    }

    const handleEmail = (e) => { // Fixed function definition syntax
        setEmail(e.target.value);
        setErrEmail("");
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    }

    const handleCPassword = (e) => { // Fixed function name and syntax
        setCPassword(e.target.value);
        setErrCPassword("");
    }

    //email validation

    // const emailValidation = (email) =>{
    //   return String(email).toLowerCase().match(/^\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
      
    // }

    const handleRegistration = (e) => {
        e.preventDefault();
        let isValid = true;
        if (!clientName) {
            setErrClientName("Enter your name");
            isValid = false;
        }
        if (!email) {
            setErrEmail("Enter your email");
            isValid = false;
        }
        if (!password) {
            setErrPassword("Enter your password");
            isValid = false;
        } else if (password.length < 6) {
            setErrPassword("Password must be at least 6 characters");
            isValid = false;
        }
        if (!cPassword) {
            setErrCPassword("Confirm your password");
            isValid = false;
        } else if (cPassword !== password) {
            setErrCPassword("Passwords do not match");
            isValid = false;
        }

        if (isValid) {
            // Submit the form
            console.log("Form is valid");
        }
    };

    return (
        <div className="w-full">
            <div className="w-full bg-gray-50 pb-10">
                <form className="w-[370px] mx-auto flex flex-col items-center">
                    <img className="w-32" src={logo} alt="logo" />
                    <div className='w-full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Create Account</h2>
                        <div className='flex flex-col gap-3'>
                            {/* Name Input */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Name</p>
                                <input
                                    onChange={handleName}
                                    className="w-full py-1 border border-gray-300 px-2 text-base rounded-sm outline-none focus:ring-2 focus:ring-[#e77600] focus:border-transparent duration-100"
                                    type="text"
                                    value={clientName} // Added value for controlled component
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                />
                                {errClientName && <p className='text-red-600 text-xs font-semibold'>{errClientName}</p>}
                            </div>
                            {/* Email Input */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Email or Phone No</p>
                                <input
                                    onChange={handleEmail}
                                    className="w-full py-1 border border-gray-300 px-2 text-base rounded-sm outline-none focus:ring-2 focus:ring-[#e77600] focus:border-transparent duration-100"
                                    type="email" // Changed to email type
                                    value={email}
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                />
                                {errEmail && <p className='text-red-600 text-xs font-semibold'>{errEmail}</p>}
                            </div>
                            {/* Password Input */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Password</p>
                                <input
                                    onChange={handlePassword}
                                    className="w-full py-1 border border-gray-300 px-2 text-base rounded-sm outline-none focus:ring-2 focus:ring-[#e77600] focus:border-transparent duration-100"
                                    type="password"
                                    value={password}
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                />
                                {errPassword && <p className='text-red-600 text-xs font-semibold'>{errPassword}</p>}
                            </div>
                            {/* Confirm Password Input */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Confirm Password</p>
                                <input
                                    onChange={handleCPassword}
                                    className="w-full py-1 border border-gray-300 px-2 text-base rounded-sm outline-none focus:ring-2 focus:ring-[#e77600] focus:border-transparent duration-100"
                                    type="password"
                                    value={cPassword}
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                />
                                {errCPassword && <p className='text-red-600 text-xs font-semibold'>{errCPassword}</p>}
                            </div>
                            <button onClick={handleRegistration} className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#fec14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                                Continue
                            </button>
                        </div>
              
                    </div>
                </form>
             
            </div>
        </div>
    );
};

export default RegistrationForm;
