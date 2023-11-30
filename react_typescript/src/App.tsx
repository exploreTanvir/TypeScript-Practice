import "./App.css";
import User from "./components/User";
import ArrayOfObject from "./components/ArrayOfObject";

function App() {
  const user1 = {
    id: 1,
    email: "tanvirhossen853@gmail.com",
    name: "Tanvir",
    age: 30,
    isRegister: true,
    lang: ["Bangla", "English"],
  };

  const user2 = {
    id: 2,
    email: "rohim853@gmail.com",
    name: "Rohim",
    age: 40,
    isRegister: false,
    lang: ["Urdu", "Hindi", "Arabic"],
  };

  const users = [
    {
      id: 1,
      email: "korim@gmail.com",
      name: "Korim",
      age: 33,
      isRegister: true,
      lang: ["Bangla", "English"],
    },
    {
      id: 2,
      email: "milon@gmail.com",
      name: "Milon",
      age: 40,
      isRegister: false,
      lang: ["Urdu", "Hindi", "Arabic"],
    },
  ];
  return (
    <div className="App">
      <h1>React TypeScript</h1>

      <User user={user1} />
      <User user={user2} />
      <ArrayOfObject users={users} />
    </div>
  );
}

export default App;
