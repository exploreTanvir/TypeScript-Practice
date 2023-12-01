import React, { useState } from "react";

const NewUser = () => {
  const [userName, setUserName] = useState("");

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleName = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(userName);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", background: "red", color: "white" }}>
        Typing events
      </h1>
      <h1>Create New user</h1>
      <input
        onChange={handleOnchange}
        type="text"
        value={userName}
        placeholder="Enter your name"
      />
      <p>{userName}</p>
      <button onClick={handleName}>Click and check console</button>
    </div>
  );
};

export default NewUser;
