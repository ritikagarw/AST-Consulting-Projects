import CitiesList from "@/components/CitiesList/CitiesList";
import styles from "./styles.module.css";

const Cities = ({ params }: { params: { slug: string } }) => {
  
  return (
    <div className={styles.mainContainer}>
      {<CitiesList country={decodeURIComponent(params.slug)} />}
    </div>
  );
};

export default Cities;
