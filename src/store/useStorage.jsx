import { createContext, useContext } from "react";
import  projects  from "./data/projects"
import experiences from "./data/expirience";
import skills from "./data/skills";
import hero from "./data/hero";
import about from "./data/about";
import contactMethods from "./data/contactMethod";

const StorageContext = createContext();

export const StorageProvider = ({ children }) => {

    const storage = { 
        projects,
        experiences,
        skills,
        hero,
        about,
        contactMethods
    }
    return (
        <StorageContext.Provider value={storage}>
            {children}
        </StorageContext.Provider>
    )
}

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error("useStorage must be used within a StorageProvider");
  }
  return context;
};

