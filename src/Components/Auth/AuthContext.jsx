import React, { useState, useContext, useEffect } from "react";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){

    const [hasToken, setToken] = useState(localStorage.getItem("token"));

    const value = {
        hasToken,
        setToken
    };

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}