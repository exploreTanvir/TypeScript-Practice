type useDemoprops = {
  users: {
    id: number;
    email: string;
    name: string;
    age: number;
    isRegister: boolean;
    lang: string[];
  }[];
};

const arrayOfObject = ({ users }: useDemoprops) => {
  return (
    <div>
      {users.map((user) => {
        const {id,name,email,lang,age,isRegister,}=user
        return (
          <div key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{lang}</p>
            <p>{age}</p>
            <p>{isRegister}</p>
            <p>{id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default arrayOfObject;
