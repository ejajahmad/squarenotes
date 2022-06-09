import React, { useState } from 'react';
import Routes from './components/Routes';

function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div
            className={`${
                darkTheme ? 'dark' : ''
            } h-screen flex items-center justify-center bg-orange-300`}
        >
            <div>
                <Routes />
            </div>
        </div>
    );
}

export default App;

/* 
<div className="dark:text-gray-200 lg:min-w-[90%]  lg:min-h-[90%] min-w-full min-h-full bg-white dark:bg-gray-900 max-w-screen-xl rounded-md">
<Routes />
</div> */
