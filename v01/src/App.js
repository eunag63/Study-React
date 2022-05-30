import './App.css';
import Container from './Container';
import Conter from './Count';

function App() {

  const values = {
    a: 1,
    b: 2,
    c: 3
  }
  return (
    <Container>
      <div className="App">
        <Conter {...values}></Conter>
      </div>
    </Container>
    
  );
}

export default App;
