"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     console.error("Error occurred:", error);
//   }, [error]);

  return (
    <div>
      <h2>Something went wrong</h2>
      <h2>{error?.message}</h2>

      <button className="cursor-pointer" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};   

export default error;
