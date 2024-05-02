"use client";

import { MyContext } from "@/app/contextApi/MyContext";
import Dropdown from "@/components/Dropdown/Dropdown";
import styles from "./styles.module.css";
import React, { useContext } from "react";

const Cities = ({ params }: { params: { slug: string } }) => {
  const myContext = useContext(MyContext);

  if (!myContext) {
    throw new Error("UserProfile must be used within a UserProvider");
  }

  return (
    <div className={styles.mainContainer}>
      <Dropdown
        data={myContext.cities}
        placeholder={`Select ${params.slug} City`}
      />
    </div>
  );
};

export default Cities;
