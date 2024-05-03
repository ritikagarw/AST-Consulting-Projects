"use client";

import { Select } from "@chakra-ui/react";
import styles from "./CountryDropdown.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCountriesList } from "@/helpers/api";

const Dropdown = () => {
  const [result, setResult] = useState<any>();
  const [country, setCountry] = useState<string>();

  const router = useRouter();

  useEffect(() => {
    getCountriesList().then((data) => setResult(data));
  }, []);

  useEffect(() => {
    if (country) {
      const uriCountry = encodeURIComponent(country);
      router.push(`/country/${uriCountry}`);
    }
  }, [country, router]);

  const handleChange = (e: any) => {
    setCountry(e.target.value);
  };

  return (
    <div className={styles.main}>
      <Select placeholder="Select Country Name" value={country} onChange={handleChange}>
        {result?.map((item: any) => (
          <option key={item.iso3} value={item.country}>
            {item.country}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
