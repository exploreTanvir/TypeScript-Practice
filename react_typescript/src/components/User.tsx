type UserProps = {
  user: {
    id: number;
    email: string;
    name: string;
    age: number;
    isRegister: boolean;
    lang: string[];
  };
};
const User = ({ user }: UserProps) => {
  // const { name, age, isRegister, id, email, lang } = props;
  return (
    <div style={{ border: "1px solid", margin: ".5rem" }}>
      <h1>{user.id}</h1>
      <h3>{user.name}</h3>
      <h4>{user.email}</h4>
      <p>I am just {user.age} years old</p>
      {user.isRegister ? <p>Registered User</p> : <p>Not Registered User</p>}
      <p>
        Speaks:{" "}
        {user.lang.map((language, index) => {
          return <span key={index}>{language} ,</span>;
        })}
      </p>
    </div>
  );
};

export default User;
