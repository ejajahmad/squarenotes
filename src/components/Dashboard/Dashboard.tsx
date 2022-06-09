import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../service/context/AppContextProvider';

export default function Dashboard() {
    const { isLogin, loginToken } = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            navigate('/');
        }
    }, [isLogin]);

    return (
        <div>
            Dashboard
            <div>{loginToken?.email}</div>
        </div>
    );
}
