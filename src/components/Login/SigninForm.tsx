import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../service/context/AppContextProvider';

import { signInWithEmailAndPassword } from '../../service/firebase/authentication';

export const SigninForm = () => {
    const {
        isLogin,
        setIsLogin,
        setLoginToken,
        setKeepLoggedIn,
        keepLoggedIn,
        saveLoginStateInLocalStorage
    } = useAppContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignin = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        const keepLoggedInState = localStorage.getItem('keepLoggedIn');
        const loginTokenState = localStorage.getItem('loginToken');

        if (keepLoggedInState) {
            setKeepLoggedIn(JSON.parse(keepLoggedInState));
        }

        if (loginTokenState) {
            setLoginToken(JSON.parse(loginTokenState));
        }

        if (email.length === 0 || password.length === 0) {
            setError('Please enter email and password');
            return;
        }
        signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                if (response.error) {
                    setError(response?.error?.message.replaceAll('_', ' '));
                    return;
                } else if (response.refreshToken) {
                    setIsLogin(true);
                    setLoginToken(response);
                    if (keepLoggedIn) {
                        saveLoginStateInLocalStorage();
                    }
                    navigate('/dashboard');
                }
            })
            .catch((error) => {
                console.log(error);
                setError(error?.message);
            });
    };

    useEffect(() => {
        if (isLogin) {
            navigate('/dashboard');
        }
    }, [isLogin]);

    return (
        <form className="w-full max-w-sm">
            <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full  px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-email"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder=" Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Password
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap mx-3 ">
                <div className="w-full px-3">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                        onClick={(e) => handleSignin(e)}
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap mx-3 mt-3">
                <div className="w-full px-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="grid-checkbox"
                                onChange={(e) =>
                                    setKeepLoggedIn(
                                        (prevState: boolean) => !prevState
                                    )
                                }
                            />
                            <label
                                className="text-sm text-gray-600"
                                htmlFor="grid-checkbox"
                            >
                                Keep me logged in
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap item-center justify-center mx-3 mt-3 ">
                <p className="text-red-500 text-sm italic">{error}</p>
            </div>
        </form>
    );
};
