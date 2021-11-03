import '../styles/App.css';
import {Button, Container} from 'react-bootstrap';
import Chores from './chores/Chores'
import Expenses from "./expenses/Expenses";

function App() {

  // const [chores, expenses] = React.useState("");
  


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
