import React, { useState, createContext, useEffect } from "react";
import supabase from "../../supabase";
export const UserContext = createContext();

function Userprovider({ children }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [User, setUser] = useState("");
  const [SessionCheck, setSessionCheck] = useState(false);

  const handleSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    // setUser(data.session.user.id);
    if (data) {
      try {
        setUser(data.session.user.id);
        setSessionCheck(true);
      } catch (error) {
        setSessionCheck(true);
      }
      console.log(data, error);
    }

    useEffect(() => {
      handleSession();
    }, []);

    return (
      <UserContext.Provider
        value={{
          User,
          setUser,
          Email,
          setEmail,
          Password,
          setPassword,
          SessionCheck,
          setSessionCheck,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };
}

export default Userprovider;
