import ClassFuncTest from '../components/ClassComponents/ClassFunc';
import ClassWithState from '../components/ClassComponents/ClassWithState';
import ClassLifeCycle from '../components/ClassComponents/ClassLifeCycle';

import styles from './Test.module.css';

const Test = () => {
  return (
    <main className={styles.container}>
      <div className={styles.innerBlock}>
        <ClassFuncTest />
        <ClassWithState />
        <ClassLifeCycle />
      </div>
    </main>
  );
};

export default Test;
