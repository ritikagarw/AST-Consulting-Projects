"use client";

import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./CitiesList.module.css";
import { getCities } from "@/helpers/api";

const CitiesList = ({ country }: { country: string }) => {
  const [cities, setCities] = useState<[]>();

  useEffect(() => {
    getCities(country).then((data: []) => setCities(data));
  }, [country]);

  return (
    <UnorderedList className={styles.citiesList}>
      {cities?.map((e: any) => (
        <ListItem key={e}> {e} </ListItem>
      ))}
    </UnorderedList>
  );
};

export default CitiesList;
