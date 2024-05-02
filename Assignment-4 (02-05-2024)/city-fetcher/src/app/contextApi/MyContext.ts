"use client";

import { createContext } from "react";

interface ContextProps {
  cities: [];
  setCities: (value: any) => void;
}

export const MyContext = createContext<ContextProps>({
  cities: [],
  setCities: () => {},
});

