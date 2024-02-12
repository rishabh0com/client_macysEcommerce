import React, { createContext, useEffect, useState } from "react";

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [loading,setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    access: false,
  });

  console.log("loading",loading);

  useEffect(() => {
    console.log("user detail context",userDetail);
  }, [userDetail]);

  return (
    <UserContext.Provider value={{ userDetail, setUserDetail, loading,setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
