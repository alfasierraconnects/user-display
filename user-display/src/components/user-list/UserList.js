import React from "react";
import UserItem from "./UserItem";

export default function UserList(props) {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg bg-white p-4 gap-2 m-10">
      {props.displayList.map((item) => {
        return (
          <UserItem
            name={item.userName}
            college={item.userCollege}
            age={item.userAge}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
}
