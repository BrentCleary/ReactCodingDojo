import React, {useState} from "react";
import StyledBox from "./StyledBox"; 


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
        <StyledBox bgColor="blue"/>
        <div>In the Box?</div>
        <StyledBox bgColor="red" height="200px"/>
        <button className="btn" onClick={ handleClick }>Update Birthday</button>
      </div>

      <div className="additional-info">
        <h1>{ props.children }</h1>
      </div>
    </>
);
}

export default PersonCard;