import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../service/context/AppContextProvider';
import { Transition } from '@headlessui/react';
import { MdNotes } from 'react-icons/md';
import { AiFillStar, AiOutlineSetting } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { BiUser, BiLogOutCircle } from 'react-icons/bi';

import { ReactComponent as Logo } from '../../assets/sqaurenotelogo.svg';

export default function Sidebar() {
    const { showSidebar, isLogin, setIsLogin, logoutUser } = useAppContext();
    const navigate = useNavigate();
    return (
        <Transition
            show={showSidebar}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                className={`max-w-[250px]  h-full bg-slate-200 transition-all rounded-md relative`}
            >
                <ul className="flex flex-col justify-center">
                    <li className="flex-1">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? 'bg-slate-300' : undefined
                            }
                        >
                            <div className="p-4 text-slate-500  flex items-center gap-2  px-8">
                                <Logo className="w-8 h-8" />
                                <h1 className="text-xl text-black font-bold">
                                    Sqaurenotes
                                </h1>
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex-1">
                        <NavLink
                            to="notes"
                            className={({ isActive }) =>
                                isActive ? 'bg-slate-300' : undefined
                            }
                        >
                            <div className="p-4 text-slate-500 hover:bg-slate-300 flex items-center gap-2  px-8">
                                <MdNotes size={20} />
                                Notes
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex-1">
                        <NavLink
                            to="starred"
                            className={({ isActive }) =>
                                isActive ? 'bg-slate-300' : undefined
                            }
                        >
                            <div className=" p-4 text-slate-500 hover:bg-slate-300 flex items-center gap-2  px-8">
                                <AiFillStar size={20} />
                                Starred
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex-1">
                        <NavLink
                            to="trash"
                            className={({ isActive }) =>
                                isActive ? 'bg-slate-300' : undefined
                            }
                        >
                            <div className=" p-4 text-slate-500 hover:bg-slate-300 flex items-center gap-2  px-8">
                                <FiTrash2 size={20} />
                                Trash
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex-1">
                        <NavLink
                            to="settings"
                            className={({ isActive }) =>
                                isActive ? 'bg-slate-300' : undefined
                            }
                        >
                            <div className=" p-4 text-slate-500 hover:bg-slate-300 flex items-center gap-2  px-8">
                                <AiOutlineSetting size={20} />
                                Settings
                            </div>
                        </NavLink>
                    </li>
                    <li className="flex-1">
                        <NavLink
                            to="profile"
                            className={({ isActive }) =>
                                isActive ? 'bg-slate-300' : undefined
                            }
                        >
                            <div className=" p-4 text-slate-500 hover:bg-slate-300 flex items-center gap-2  px-8">
                                <BiUser size={20} />
                                Profile
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <div
                    className=" p-4 text-slate-500 hover:bg-slate-300 flex items-center gap-2  px-8 w-full absolute bottom-0"
                    onClick={() => {
                        logoutUser && logoutUser().then(() => navigate('/'));
                    }}
                >
                    <BiLogOutCircle size={20} />
                    Log Out
                </div>
            </div>
        </Transition>
    );
}
