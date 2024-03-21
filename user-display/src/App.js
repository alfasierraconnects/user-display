import React, { useState } from "react";
import InputForm from "./components/user-input/InputForm";
import UserList from "./components/user-list/UserList";
import ErrorModal from "./components/modal/ErrorModal";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [errorPresent, setErrorPresent] = useState(false);
  const [errorType, setErrorType] = useState("");

  const inputDataHandler = (data) => {
    const updatedList = [...userList, data];
    setUserList(updatedList);
    console.log(updatedList);
  };

  const errorModalHandler = (errorType) => {
    setErrorPresent(true);
    setErrorType(errorType);
  };

  const resetErrorHandler = () => {
    setErrorPresent(false);
    setErrorType("");
  };

  return (
    <div
      className={`bg-slate-800 p-6 h-screen flex flex-col gap-4 ${
        errorPresent ? "relative opacity-85" : ""
      }`}
    >
      <InputForm
        sendDataToApp={inputDataHandler}
        sendErrorToApp={errorModalHandler}
      />
      <UserList displayList={userList} />
      {errorPresent && (
        <ErrorModal errorType={errorType} resetError={resetErrorHandler} />
      )}
    </div>
  );
}
