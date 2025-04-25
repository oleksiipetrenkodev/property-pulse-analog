"use clinet";
import ClipLoader from "react-spinners/ClipLoader";

const ovveride = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = () => {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={ovveride}
      size={150}
      aria-label="Loading spinner"
    />
  );
};

export default LoadingPage;
