import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

import TestCounter from "../components/TestComponents/TestCounter";
import TestSelect from "../components/TestComponents/TestSelect";
import TestSearch from "../components/TestComponents/TestSearch";

import styles from "./Test.module.css";

const Test = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Komponent został zmontowany!");
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.innerBlock}>
        <h1>Test 1 - Counter</h1>
        <TestCounter counter={counter} setCounter={setCounter} />
      </div>
      <div className={styles.innerBlock}>
        <h1>Test 2 - Select</h1>
        <TestSelect counter={counter} />
      </div>
      <div className={styles.innerBlock}>
        <h1>Test 3 - Search</h1>
        <TestSearch />
      </div>
      <ProductCard
        image={
          "https://img.ltwebstatic.com/images3_pi/2023/02/21/16769546216e86a3d7399b1cae76b6b52fd59f8014_thumbnail_900x.webp"
        }
        title="Przykładowa sukienka"
        shortDesc="Przykładowy opis przykładowej sukienki"
        price="159,99 zł"
        isFeatured="true"
      />
      <ProductCard
        image={
          "https://img.ltwebstatic.com/images3_pi/2022/09/01/166200262963d04769b63a6ddb1d8d958b7881e505_thumbnail_405x552.webp"
        }
        title="Przykładowa sukienka"
        shortDesc="Przykładowy opis przykładowej sukienki"
        price="159,99 zł"
        isFeatured="true"
      />
    </main>
  );
};

export default Test;
