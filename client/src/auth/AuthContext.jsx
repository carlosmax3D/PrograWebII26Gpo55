import React, { createContext, useContext, useState, useEffect } from 'react'; 
const AuthContext = createContext(); 

export function useAuth() { 
    return useContext(AuthContext); 
} 
export function AuthProvider({ children }) { 
  const [user, setUser] = useState(()=>{
    const cacheUser = localStorage.getItem("PWEBII2655.user")
    return cacheUser ? JSON.parse(cacheUser) : null;
  })

  useEffect(()=>{
    if (user) localStorage.setItem("PWEBII2655.user", JSON.stringify(user))
    else localStorage.removeItem("PWEBII2655.user");
  }, [user]);

  const login = (userData) => { 
    // Lógica de inicio de sesión aquí 
    setUser(userData);
    console.log(userData)
    };
    const logout = () => { // Lógica para cerrar sesión aquí 
        setUser(null);
        console.log("Sesion cerrada")
    };
    return ( 
    <AuthContext.Provider value={{ user, login, logout }}> 
    {children}
    </AuthContext.Provider> 
    ); 
}