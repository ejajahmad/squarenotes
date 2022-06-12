import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import svg as react component
import { ReactComponent as Logo } from '../../assets/sqaurenotelogo.svg';
import { ReactComponent as GirlIllustration } from '../../assets/loginillustration-01.svg';
import { SigninForm } from './SigninForm';
import { AiOutlineGoogle, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { SignupForm } from './SignupForm';
import { useAppContext } from '../../service/context/AppContextProvider';

export default function LoginContainer() {
    const [isSignIn, setIsSignIn] = useState(true);

    const {
        loadLoginStateFromLocalStorage,
        keepLoggedIn,
        isLogin,
        setIsLogin
    } = useAppContext();

    const navigate = useNavigate();

    useEffect(() => {
        loadLoginStateFromLocalStorage();

        if (keepLoggedIn) {
            setIsLogin(true);
            navigate('/dashboard');
        }
    }, []);

    return (
        <div className="w-full h-full flex flex-col md:flex-row dark:text-gray-200 lg:min-w-[90%]  lg:min-h-[90%] min-w-full min-h-full bg-white dark:bg-gray-900 max-w-screen-xl rounded-md py-20 px-20">
            {/* CONTAINER 1 - ILLUSTRATION */}
            <div className="w-full flex flex-col items-center justify-center">
                <div className=" h-full flex flex-col  justify-center">
                    <GirlIllustration className="w-[70%] " />
                </div>
            </div>
            {/* CONTAINER 2 - FORM */}
            <div className="w-full h-full flex flex-col items-center justify-center">
                {/* LOGO CONTAINER */}
                <div className="logo flex items-center  space-x-2 h-32 w-full justify-center">
                    <Logo className="w-10 h-10" />
                    <h1 className="text-3xl font-bold">Sqaurenotes</h1>
                </div>
                {/* Sign in form */}

                <div className="w-full h-full flex flex-col justify-center items-center space-y-5">
                    <h1 className="text-3xl ">
                        {isSignIn ? 'Welcome back' : 'Create a new account'}
                    </h1>
                    {isSignIn ? <SigninForm /> : <SignupForm />}

                    {/* SIGN-UP CONTAINER */}
                    <div className=" flex items-center space-x-2 ">
                        <p className="text-md ">
                            {isSignIn
                                ? 'Dont have an account?'
                                : 'Already have an account?'}
                        </p>
                        <button
                            className="text-blue-500 hover:text-blue-700 text-md font-bold"
                            onClick={() => setIsSignIn(!isSignIn)}
                        >
                            {isSignIn ? 'Register' : 'Sign In'}
                        </button>
                    </div>
                    <div className="flex items-center space-x-4 w-[80%]">
                        <hr className="border-gray-300 border w-full" />
                        <p className="text-sm text-gray-600">or</p>
                        <hr className="border-gray-300 border w-full" />
                    </div>
                    <div className="flex items-center justify-center space-x-8 w-full">
                        <AiOutlineGoogle
                            size={20}
                            className="hover:text-gray-600"
                        />
                        <AiOutlineTwitter
                            size={20}
                            className="hover:text-gray-600"
                        />
                        <FaFacebookF
                            size={20}
                            className="hover:text-gray-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
