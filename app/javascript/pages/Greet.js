import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Greet = () => {
  const greeting = useSelector((state) => state.greeting);
  console.log(greeting);

  return (
    <>
      <Link to="/">Go back home</Link>
      <p>Press the button to be greeted!</p>
      <p>ID: {greeting.id}, {greeting.greeting}</p>
    </>
  );
}

export default Greet;
