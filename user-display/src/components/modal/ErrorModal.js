import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="fixed inset-0 bg-black opacity-50 z-50"></div>;
};

const Overlay = (props) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-50">
      <div className="relative shadow-lg rounded-xl bg-white overflow-hidden w-96">
        <h2 className="text-white bg-purple-950 text-xl font-bold p-4">
          An error occurred!
        </h2>
        <p className="font-bold p-4 mb-20">{props.errorText}</p>
        <button
          onClick={props.resetError}
          className="absolute bottom-0 right-0 text-white bg-purple-950 p-2 px-4 m-4 rounded hover:shadow-lg hover:shadow-purple-500/40 active:opacity-85 active:shadow-none"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default function ErrorModal(props) {
  function errorText() {
    if (props.errorType === "nameError")
      return "Error in reading Name. Please enter a valid name.";
    else return "Error in Age. Please enter a number more than 0.";
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay errorText={errorText()} resetError={props.resetError} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
