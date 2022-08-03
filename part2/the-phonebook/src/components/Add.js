import React from "react";

const Add = ({
  addPerson,
  handleNameChange,
  handleNumbChange,
  newName,
  newNumb,
}) => (
  <div>
    <h2>Add a new</h2>
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />{" "}
      </div>
      <div>
        number: <input value={newNumb} onChange={handleNumbChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </div>
);

export default Add;
