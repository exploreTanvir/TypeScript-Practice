import { useReducer } from "react";
const INCREMENT = "INCREMENT";
const RESET = "RESET";
const DECREMENT = "DECREMENT";

const initialState = {
  count: 0,
};
type StateType = {
  count: number;
};

type IncrementType = { type: typeof INCREMENT };
type ReseteType = { type: typeof RESET };
type DecrementType = { type: typeof DECREMENT };

type CounterActionType = IncrementType | ReseteType | DecrementType;

const reducer = (state: StateType, action: CounterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
      break;
    case RESET:
      return { count: 0 };
      break;
    case DECREMENT:
      return { count: state.count - 1 };
      break;

    default:
      break;
  }
};

const UseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", background: "red", color: "white" }}>
        use Reducer from USeReduser.tsx file
      </h1>
      <h1>Count : {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ typeof: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReduce;
