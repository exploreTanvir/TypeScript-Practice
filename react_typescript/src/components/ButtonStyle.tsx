import React from "react";
type btnProps = {
  btnStyle: React.CSSProperties;
};
const ButtonStyle = (props:btnProps) => {
  return (
    <div>
      <h1>Style props from ButtonStyle.tsx file</h1>
      <h5 style={props.btnStyle}>ButtonStyle</h5>
    </div>
  );
};

export default ButtonStyle;
