import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';
import PersonList from './PersonList';
import AddNewPerson from './AddNewPerson';

function App() {

  const [persons , setPersons] = useState([
    {
      name : "foulen-1",
      email : "foulen-1@email.com",
      age:10
    }
  ])

  const [show , setShow] = useState(false)


  const addNewPerson = (newPerson) => {
    setPersons([
      ...persons , newPerson
    ])
  }

  const handleShow = () =>{
    setShow(!show)
  }





  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleShow}> show </button>
        { show ?
          <Counter/> : "not found"
        }
        <hr/>
        <hr></hr>
         <hr></hr>
         <hr></hr>

        <AddNewPerson addNewPerson={addNewPerson}/>
         
         <hr/>
         
        <PersonList persons={persons} />


      </header>
    </div>
  );
}

export default App;
