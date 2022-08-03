import React from "react";

const Contacts = ({ personsToShow }) => (
  <div>
    <h2>Numbers</h2>

    {personsToShow &&
      personsToShow.map((person) => {
        return (
          <li key={person.name}>
            {person.name} {person.numb}{" "}
          </li>
        );
      })}
  </div>
);

export default Contacts;
