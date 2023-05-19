import { createContext } from "react";

type Navbar = "home" | "carte" | "photo" | "concept";

export const selectedNavbar = createContext<Navbar>("home");
