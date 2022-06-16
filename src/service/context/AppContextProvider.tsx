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
    saveLoginStateInLocalStorage?: () => void;
    loadLoginStateFromLocalStorage?: () => void;
    userToken?: string;
    setUserToken?: (userToken: string) => void;
    showSidebar?: boolean;
    setShowSidebar?: (showSidebar: boolean) => void;
    logoutUser?: () => Promise<void>;
}

const AppContext = createContext<AppContextType>({});

interface Props {
    children?: React.ReactNode;
}

export default function AppContextProvider({ children, ...props }: Props) {
    const [isLogin, setIsLogin] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [loginToken, setLoginToken] =
        useState<AppContextType['loginToken']>();
    const [userToken, setUserToken] = useState('');

    const [showSidebar, setShowSidebar] = useState(true);

    const saveLoginStateInLocalStorage = () => {
        localStorage.setItem('keepLoggedIn', JSON.stringify(keepLoggedIn));
        // userToken?.length > 0 &&
        //     localStorage.setItem('userToken', JSON.stringify(userToken));
    };

    const loadLoginStateFromLocalStorage = () => {
        const keepLoggedIn = localStorage.getItem('keepLoggedIn');

        if (keepLoggedIn) {
            setKeepLoggedIn(JSON.parse(keepLoggedIn));
            setIsLogin(true);
        }

        const userToken = localStorage.getItem('userToken');
        if (userToken) {
            setUserToken(JSON.parse(userToken));
        }
    };

    const logoutUser = async () => {
        setIsLogin(false);
        setKeepLoggedIn(false);
        setLoginToken(undefined);
        setUserToken('');
        localStorage.removeItem('keepLoggedIn');
        localStorage.removeItem('userToken');
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
                loadLoginStateFromLocalStorage,
                userToken,
                setUserToken,
                showSidebar,
                setShowSidebar,
                logoutUser
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
