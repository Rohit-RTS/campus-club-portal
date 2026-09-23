import { createContext, useEffect, useState } from "react";

export const ClubsContext = createContext();

export function ClubsProvider({ children }) {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/club")
            .then((response) => response.json())
            .then((data) => {
                setClubs(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <ClubsContext.Provider value={{ clubs }}>
            {children}
        </ClubsContext.Provider>
    );
}