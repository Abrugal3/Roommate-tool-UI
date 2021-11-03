import '../styles/App.css';
import {Button} from 'react-bootstrap';

function App() {

  // const [chores, expenses] = React.useState("");

  function testBtn(text) {
    alert('Clicked ' + text + ' button');
  }
  
  async function fetchExpenses(){
    fetch("/expenses")
      .then(response => response.json())
      .then(data => console.log(data));
  } 

  return (
    <div className="App">
      <Button className="chore-btn" variant="primary" onClick={() => testBtn('Chores')}><h1>Chores</h1></Button>
      <Button className="expense-btn" variant="dark" onClick={() => fetchExpenses()}><h1>Expenses</h1></Button>
    </div>
  );
}

export default App;
