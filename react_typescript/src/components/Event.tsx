import React, { useState } from "react";

const Event = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setemail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { name, email };
    console.log(newUser);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", background: "red", color: "white" }}>
        Typing State State.tsx file
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            name
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              id="name"
              required
              onChange={handleName}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            email
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              id="email"
              required
              onChange={handleEmail}
            />
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Event;
