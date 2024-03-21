import React, { useState } from "react";
import InputForm from "./components/user-input/InputForm";
import UserList from "./components/user-list/UserList";

export default function App() {
  const [userList, setUserList] = useState([]);

  const inputDataHandler = (data) => {
    const updatedList = [...userList, data];
    setUserList(updatedList);
    console.log(updatedList);
  };

  return (
    <div className="bg-slate-800 p-6 h-lvh flex flex-col gap-4">
      <InputForm sendDataToApp={inputDataHandler} />
      <UserList displayList={userList} />
    </div>
  );
}
