import React, { useState } from 'react';
import { signUpWithEmailAndPassword } from '../../service/firebase/authentication';

export const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || password.length === 0) {
            setError('Please enter name, email and password');
            return;
        }
        setError('');
        signUpWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response);
                setError(response.error.message.replaceAll('_', ' '));
            })
            .catch((error) => {
                console.log(error);
                setError(error?.message);
            });
    };

    return (
        <form className="w-full max-w-sm">
            <div className="flex flex-wrap -mx-3">
                <div className="flex flex-wrap -mx-3 space-y-5">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-name"
                        >
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="w-full px-3">
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
                    <div className="w-full px-3">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                            onClick={(e) => handleSignup(e)}
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="flex flex-wrap item-center justify-center mx-3 mt-3 ">
                        <p className="text-red-500 text-sm italic">{error}</p>
                    </div>
                </div>
            </div>
        </form>
    );
};
