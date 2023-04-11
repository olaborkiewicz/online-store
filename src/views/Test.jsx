import ClassFuncTest from '../components/ClassComponents/ClassFunc';
import ClassWithState from '../components/ClassComponents/ClassWithState';
import ClassLifeCycle from '../components/ClassComponents/ClassLifeCycle';


import CartItem from "../components/CartItem";

import styles from "./Test.module.css";

const Test = () => {
  return (
    <main className={styles.container}>
      <div className={styles.innerBlock}>
        <ClassFuncTest />
        <ClassWithState />
        <ClassLifeCycle />
      </div>
      <div className={styles.innerBlock}>
        <h1>Test 4 - Cart Item</h1>
        <CartItem
          image="https://picsum.photos/250/300"
          title="Example Product"
          quantity="1"
          price="139.99"
        />
      </div>
    </main>
  );
};

export default Test;
