import logo from './logo.svg';
import './App.css';
import Accordion from './utils/Accordion';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
     <Accordion/>
     <br/>
     <Header/>
      <br/>
      <Table/>
    </div>
  );
}

export default App;
