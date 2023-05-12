import React from "react";

const Person = ({ name, lastName, age }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>LastName : {lastName}</h2>
      <h2>Age : {age}</h2>
    </>
  );
};

export default Person;
