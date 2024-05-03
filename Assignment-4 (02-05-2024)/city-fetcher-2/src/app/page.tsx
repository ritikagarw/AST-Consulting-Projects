import Dropdown from "@/components/Dropdown/CountryDropdown";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <Dropdown />
    </div>
  );
};

export default Home;
