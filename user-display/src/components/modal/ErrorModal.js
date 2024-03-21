import React from "react";

export default function ErrorModal() {
  return (
    <div className="absolute inset-0 backdrop-blur-sm flex justify-center items-center">
      <div className="relative shadow-lg rounded-xl bg-white overflow-hidden w-96 ">
        <h2 className="text-white bg-purple-950 text-xl font-bold p-4">
          An error occured!
        </h2>
        <p className="font-bold p-4 mb-20">Something went wrong!</p>
        <button className="absolute bottom-0 right-0 text-white bg-purple-950 p-2 px-4 m-4 rounded hover:shadow-lg hover:shadow-purple-500/40 active:opacity-85 active:shadow-none">
          Okay
        </button>
      </div>
    </div>
  );
}
