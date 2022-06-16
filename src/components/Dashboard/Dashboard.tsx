import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../service/context/AppContextProvider';
import Sidebar from './Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Transition } from '@headlessui/react';

export default function Dashboard() {
    const { isLogin, loginToken, showSidebar, setShowSidebar } =
        useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate('/');
        }
    }, [isLogin]);

    return (
        <div className="bg-white w-full h-full lg:w-5/6 lg:h-5/6 rounded-md shadow-md flex">
            <Sidebar />

            {/* Menu Button */}
            {showSidebar ? (
                <Transition
                    show={true}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {' '}
                    <IoMdClose
                        size={30}
                        onClick={() =>
                            setShowSidebar && setShowSidebar(!showSidebar)
                        }
                        className="absolute top-0 right-0 m-4 md:hidden hover:cursor-pointer hover:text-slate-500 "
                    />
                </Transition>
            ) : (
                <Transition
                    show={true}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {' '}
                    <GiHamburgerMenu
                        size={30}
                        onClick={() =>
                            setShowSidebar && setShowSidebar(!showSidebar)
                        }
                        className="absolute top-0 right-0 m-4 md:hidden hover:cursor-pointer hover:text-slate-500 "
                    />
                </Transition>
            )}

            {/* Main Container */}
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}
