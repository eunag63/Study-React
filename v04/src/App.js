import Button from "./Button";
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"계속"}></Button>
    </div>
  );
}

export default App;
