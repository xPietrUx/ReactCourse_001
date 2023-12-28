import React, { useState, createContext, useContext } from "react"
import NavLinks from "./NavLinks"

export const NavbarContext = createContext();

// Custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {

    
    const [user, setUser] = useState({
        name: 'Peter'
    });

    const logout = () => {
        setUser({...user, name: null})
    };

    return (
       <NavbarContext.Provider value={{ user, logout }}>
            <nav className="navbar">
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    )
}
export default Navbar