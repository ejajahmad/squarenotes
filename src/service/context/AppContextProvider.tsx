import React, { useState, createContext, useContext } from 'react';

interface AppContextType {
    default?: string;
    isLogin?: boolean;
    setIsLogin?: (isLogin: boolean) => void;
    keepLoggedIn?: boolean;
    setKeepLoggedIn?: (keepLoggedIn: boolean) => void;
    loginToken?: {
        displayName?: string;
        email?: string;
        expiresIn?: number;
        idToken?: string;
        kind?: string;
        localId?: string;
        refreshToken?: string;
        registered?: boolean;
    };
    setLoginToken?: (loginToken: {
        displayName?: string;
        email?: string;
        expiresIn?: number;
        idToken?: string;
        kind?: string;
        localId?: string;
        refreshToken?: string;
        registered?: boolean;
    }) => void;
    saveLoginStateInLocalStorage: () => void;
    loadLoginStateFromLocalStorage: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

interface Props {
    children?: React.ReactNode;
}

export default function AppContextProvider({ children, ...props }: Props) {
    const [isLogin, setIsLogin] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [loginToken, setLoginToken] =
        useState<AppContextType['loginToken']>();

    const saveLoginStateInLocalStorage = () => {
        localStorage.setItem('keepLoggedIn', JSON.stringify(keepLoggedIn));
    };

    const loadLoginStateFromLocalStorage = () => {
        const keepLoggedIn = localStorage.getItem('keepLoggedIn');

        if (keepLoggedIn) {
            setKeepLoggedIn(JSON.parse(keepLoggedIn));
            setIsLogin(true);
        }
    };

    return (
        <AppContext.Provider
            value={{
                isLogin,
                setIsLogin,
                keepLoggedIn,
                setKeepLoggedIn,
                loginToken,
                setLoginToken,
                saveLoginStateInLocalStorage,
                loadLoginStateFromLocalStorage
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
