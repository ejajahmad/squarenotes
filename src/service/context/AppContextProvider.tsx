import React, { useState, createContext, useContext } from 'react';

interface AppContextType {
    default?: string;
    isLogin?: boolean;
    setIsLogin?: (isLogin: boolean) => void;
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
}

const AppContext = createContext<AppContextType | null>(null);

interface Props {
    children?: React.ReactNode;
}

export default function AppContextProvider({ children, ...props }: Props) {
    const [isLogin, setIsLogin] = useState(false);
    const [loginToken, setLoginToken] =
        useState<AppContextType['loginToken']>();

    return (
        <AppContext.Provider
            value={{
                isLogin,
                setIsLogin,
                loginToken,
                setLoginToken
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
