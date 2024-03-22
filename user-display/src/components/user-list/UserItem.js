import React from "react";

export default function UserItem(props) {
  return (
    <p className="font-semibold border-2 p-1">
      {props.name} from {props.college} ({props.age} years old)
    </p>
  );
}
