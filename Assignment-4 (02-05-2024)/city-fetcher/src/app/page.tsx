"use client";

import React, { useContext, useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import { Button } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { MyContext } from "./contextApi/MyContext";
import { useRouter } from "next/navigation";

const Home = () => {
  const [result, setResult] = useState<[]>([]);
  const [country, setCountry] = useState<string>();
  const {cities, setCities} = useContext(MyContext);

  const router = useRouter();

  useEffect(() => {
    const api = async () => {
      const data = await fetch(
        "https://countriesnow.space/api/v0.1/countries",
        {
          method: "GET",
        }
      );
      const jsonData = await data.json();
      setResult(jsonData.data);
    };

    api();
  }, []);

  useEffect(() => {
    if (country && result && result.length) {
      
      const choosenCountry: any = result.filter(
        (e: any) => e.country === country
      );
      
      setCities(choosenCountry[0].cities);
    }
  }, [country, result, setCities]);

  const handleOnClick = () => {
    if (country) {
      router.push(`/country/${country}`);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <Dropdown
        data={result}
        placeholder="Select Country Name"
        setCountry={setCountry}
      />
      <Button
        colorScheme="blue"
        className={styles.button}
        onClick={handleOnClick}
      >
        Button
      </Button>
    </div>
  );
};

export default Home;
