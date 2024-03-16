import { useState, useEffect } from "react";
import { isAPIup } from "../Services/api";
import "../toast.css";

const CheckAPI = () => {
  const [apiUp, setAPIup] = useState(false);
  console.log("Reloading");

  useEffect(() => {
    isAPIup().then(checkResult => setAPIup(checkResult));

    const interval = setInterval(() => {
      isAPIup().then(checkResult => {
        setAPIup(checkResult);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!apiUp)
    return (
      <div className="toast-container">
        <p>API is down</p>
      </div>
    )

  return <></>
}

export default CheckAPI;
