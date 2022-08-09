import { useEffect } from 'react';
import Button from "./Button";
import styles from './App.module.css';

function App() {
  useEffect(() => {
    console.log("Call the one!");
  }, []);


  function Hello() {
    function byFn() {
      console.log("bye");
    }
    function hiFn() {
      console.log("hi");
      return byFn;
    }
    useEffect(hiFn, []);
    return <hi>Hello</hi>
  }


  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"계속"}></Button>
    </div>
  );
}

export default App;
