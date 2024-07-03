import React, { createContext, useEffect, useState } from "react";

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
// const { firstNameL, lastNameL, emailL } = JSON?.parse(
//   localStorage?.getItem("userInfo")
// );
export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    access: false,
  });

  console.log("context", userDetail);
  // console.log("loading",loading);

  return (
    <UserContext.Provider
      value={{ userDetail, setUserDetail, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
