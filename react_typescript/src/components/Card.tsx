import React from "react";
type CardProps = {
  children: React.ReactNode;
};
const Card = (props: CardProps) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
