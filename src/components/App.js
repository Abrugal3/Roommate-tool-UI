import '../styles/App.css';
import {Container} from 'react-bootstrap';
import Chores from './chores/Chores'
import Expenses from "./expenses/Expenses";

function App() {

  return (
    <div className="App">
      <Container>
        <Chores />
      </Container>
      <Container>
        <Expenses />
      </Container>
    </div>
  );
}

export default App;
