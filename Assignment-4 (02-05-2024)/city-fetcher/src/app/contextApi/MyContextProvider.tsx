"use client";

import { MyContext } from "@/app/contextApi/MyContext";
import { ReactNode, useState } from "react";

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [cities, setCities] = useState<[]>([]);
  return (
    <MyContext.Provider value={{ cities, setCities }}>
      {children}
    </MyContext.Provider>
  );
};
