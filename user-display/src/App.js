import React, { useState } from "react";
import InputForm from "./components/user-input/InputForm";
import UserList from "./components/user-list/UserList";
import ErrorModal from "./components/modal/ErrorModal";

export default function App() {
  const [userList, setUserList] = useState([]);

  const inputDataHandler = (data) => {
    const updatedList = [...userList, data];
    setUserList(updatedList);
    console.log(updatedList);
  };

  return (
    <div className="bg-slate-800 opacity-85 p-6 h-screen flex flex-col gap-4 relative">
      <InputForm
        sendDataToApp={inputDataHandler}
        // sendErrorToApp={errorModalHandler}
      />
      <UserList displayList={userList} />
      <ErrorModal />
    </div>
  );
}
