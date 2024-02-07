import React, { createContext, useEffect, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
    const [userDetail, setUserDetail] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });

    useEffect(() => {
        console.log(userDetail);
    }, [userDetail]);


    return (
        <UserContext.Provider value={{ userDetail, setUserDetail}}>
            {children}
        </UserContext.Provider>
    );
};