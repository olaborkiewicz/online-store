import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import TestCounter from '../components/TestComponents/TestCounter';
import TestSelect from '../components/TestComponents/TestSelect';
import TestSearch from '../components/TestComponents/TestSearch';

import Input from '../components/Input';

import styles from './Test.module.css';

const Test = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('Komponent został zmontowany!');
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.innerBlock}>
        <h1>Test 1 - Counter</h1>
        <TestCounter counter={counter} setCounter={setCounter} />
        <Input
          placeholder="Wpisz coś"
          onChange={(e) => console.log(e)}
          icon={<FaFacebookF />}
        />
      </div>
      <div className={styles.innerBlock}>
        <h1>Test 2 - Select</h1>
        <TestSelect counter={counter} />
      </div>
      <div className={styles.innerBlock}>
        <h1>Test 3 - Search</h1>
        <TestSearch />
      </div>
    </main>
  );
};

export default Test;
