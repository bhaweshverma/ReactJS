import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  //Using useRef hook
  const nameRef = useRef<HTMLInputElement>(null),
    ageRef = useRef<HTMLInputElement>(null),
    person = { name: "", age: 0 };

  //can use state as well
  const [personState, setPersonState] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //with Ref hook
    if (nameRef.current !== null) person.name = nameRef.current.value; //console.log(nameRef.current.value);
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value); //console.log(ageRef.current.value);
    console.log(person);

    //with State hook
    console.log(personState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPersonState({ ...personState, name: event.target.value })
          }
          value={personState.name}
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPersonState({
              ...personState,
              age: parseInt(event.target.value),
            })
          }
          value={personState.age}
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
