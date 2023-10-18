import React, {useState} from "react";


const PersonCard = (props) => {

  const [age, setAge] = useState(props.age);

  const handleClick = () => {
    setAge( age  + 1 );
  }

  return (
    <>
      <div>
          <h1 style={{color:"red"}}>{props.firstName}</h1>
          <p>Age: { age } </p>
          <p>Hair Color: {props.hairColor}</p>
      </div>

      <div>
        <button onClick={ handleClick }>Update Birthday</button>
      </div>
    </>
);
}

export default PersonCard;