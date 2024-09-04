import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <hr></hr>
      <span style={{ color: "green" }}> user name : </span> {person.name} <br />
      <span style={{ color: "green" }}> email : </span>{person.email} <br />
      <span style={{ color: "green" }}> age : </span> {person.age} <br />
      <hr></hr>
    </div>
  );
};

export default Person;
