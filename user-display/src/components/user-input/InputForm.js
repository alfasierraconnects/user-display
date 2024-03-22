import React, { useRef } from "react";

export default function InputForm(props) {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const userName = useRef();
  const userAge = useRef();
  const userCollege = useRef();

  // const userNameChangeHandler = (event) => {
  //   setUserName(event.target.value);
  // };

  // const userAgeChangeHandler = (event) => {
  //   setUserAge(event.target.value);
  // };

  const userSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.current.value.trim().length === 0) {
      props.sendErrorToApp("nameError");
      return;
    }
    if (userCollege.current.value.trim().length === 0) {
      props.sendErrorToApp("collegeError");
      return;
    }
    if (userAge.current.value <= 0) {
      props.sendErrorToApp("ageError");
      return;
    }
    const id = Math.random().toString();
    const userDetails = {
      userName: userName.current.value,
      userAge: userAge.current.value,
      userCollege: userCollege.current.value,
      key: id,
      id: id,
    };
    props.sendDataToApp(userDetails);
    userName.current.value = "";
    userAge.current.value = "";
    userCollege.current.value = "";
  };

  return (
    <>
      <div>
        <form
          onSubmit={userSubmitHandler}
          className="flex flex-col rounded-2xl shadow-lg bg-white p-4 gap-2 m-10"
        >
          <label className="font-bold" htmlFor="userName">
            UserName
          </label>
          <input
            // onChange={userNameChangeHandler}
            className="border-2"
            id="userName"
            type="text"
            // value={userName}
            required
            autoComplete="off"
            ref={userName}
          ></input>
          <label className="font-bold" htmlFor="userCollege">
            College
          </label>
          <input
            className="border-2"
            id="userCollege"
            type="text"
            required
            autoComplete="off"
            ref={userCollege}
          ></input>
          <label className="font-bold" htmlFor="userAge">
            Age (In Years)
          </label>
          <input
            // value={userAge}
            // onChange={userAgeChangeHandler}
            className="border-2"
            type="number"
            id="userAge"
            required
            ref={userAge}
          ></input>
          <button
            className="text-white bg-purple-950 text-lg p-1 rounded-md hover:shadow-lg hover:shadow-purple-500/40 active:opacity-85 active:shadow-none"
            type="submit"
          >
            Add User
          </button>
        </form>
      </div>
    </>
  );
}
