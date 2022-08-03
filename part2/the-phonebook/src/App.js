import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Add from "./components/Add";
import Contacts from "./components/Contacts";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto" },
    { name: "Anna" },
    { name: "Iris" },
    { name: "Conny" },
    { name: "Johan" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumb, setNewNumb] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filterResult, setFilterResult] = useState("");
  const [personsToShow, setPersonsToShow] = useState([]);

  let isInBook = false;

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
      console.log(persons);
    });
  }, []);

  const addPerson = (e) => {
    checkName();
    const nameObject = {
      name: newName,
      numb: newNumb,
    };

    if (isInBook === true) {
      alert(`${newName} is already in the phonebook`);
      setNewName("");
    } else {
      e.preventDefault();
      setPersons(persons.concat(nameObject));
      setPersonsToShow(persons.concat(nameObject));
      setNewName("");
      setNewNumb("");
    }
  };

  const checkName = () => {
    persons.forEach((person) => {
      if (newName === person.name) {
        isInBook = true;
      }
    });
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumbChange = (e) => {
    setNewNumb(e.target.value);
  };

  const searchItems = (event) => {
    const search = event.target.value;
    setSearchInput(search);
    setPersonsToShow(
      persons.filter((p) => p.name.toLowerCase().includes(search))
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter onChange={searchItems} />
      <Add
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumbChange={handleNumbChange}
        newName={newName}
        newNumb={newNumb}
      />
      <Contacts personsToShow={personsToShow} persons={persons} />
    </div>
  );
};

export default App;
