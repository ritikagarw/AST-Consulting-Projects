"use client";

import { Select } from "@chakra-ui/react";
import styles from "./Dropdown.module.css";
import { Key, useState } from "react";

interface DropdownProps {
  data: [];
  placeholder: string;
  setCountry?: Function;
}

const Dropdown: React.FC<DropdownProps> = ({ data, placeholder, setCountry }) => {
  const [value, setValue] = useState<string>();

  const handleChange = (e: any) => {
    setValue(e.target.value);
    if (setCountry) {
      setCountry(e.target.value);
    }
  };

  return (
    <div className={styles.main}>
      <Select
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      >
        {setCountry && data?.map((item: any) => (
          <option key={item.iso3} value={item.country}>
            {item.country}
          </option>
        ))}

        {!setCountry && data?.map((item: any, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Dropdown;
