import { useState } from "react";
type user = {
  id: number;
  name: string;
};

const UseState = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<null | user>(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleUser = () => {
    setUser({ id: 12, name: "Tanvir" });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", background: "red", color: "white" }}>
        Typing useState Hook from UseState.tsx file
      </h1>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <h1>Count: {user?.name}</h1>
      <button onClick={handleUser}>Add User</button>
    </div>
  );
};

export default UseState;
