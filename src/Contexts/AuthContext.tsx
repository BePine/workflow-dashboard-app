import React, { createContext, useState } from 'react';

type AuthContextProviderProps = {
	children: React.ReactNode;
};

const value = 'newer';
const AuthContext = createContext<any>({});

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
    const [loggedIn, setLoggedIn] = useState(false);
	return <AuthContext.Provider value={{loggedIn, setLoggedIn}}>{children}</AuthContext.Provider>;
};

export default AuthContext