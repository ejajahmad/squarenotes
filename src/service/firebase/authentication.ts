export {};

const FIREBASE_API_KEY = 'AIzaSyDmPu_z4o20k0rQQCK4GpGn6XZHZTXDIJM';

export const signUpWithEmailAndPassword = async (
    email: string,
    password: any
) => {
    try {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}
        `,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            }
        );
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.error(error);
    }
};

export const signInWithEmailAndPassword = async (
    email: string,
    password: any
) => {
    try {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}
        `,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            }
        );
        const responseData = await response.json();
        console.log(responseData);

        return responseData;
    } catch (error: any) {
        console.error(error);
        throw new Error(error.message);
    }
};
