import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { INDEX_PATH, TempetureCheeker_PATH } from "../Constants/paths";
import cookie from "../assets/cookie.png";
import "../index.css";

function BiscuitClicker() {
  useEffect(() => {
    document.title = " Biscuit Clicker";
  });

  const [cookieCount, setCookieCount] = useState(99);
  const [cookieMulti, setCookieMulti] = useState(1);

  const multiplier = () => {
    if (cookieCount >= 100) {
      return (
        <button
          type="button"
          onClick={() => (
            setCookieMulti(cookieMulti + 1), setCookieCount(cookieCount - 100)
          )}
        >
          Increase your cookie multiplier by 1x
        </button>
      );
    }
  };
  return (
    <>
      <h1>This is the Biscuit Clicker Page.</h1>
      <div className="cookie">
        <img
          onClick={() => setCookieCount(cookieCount + 1 * cookieMulti)}
          src={cookie}
          alt="Not here"
          width="25%"
        />
      </div>
      <p>Cookie Count:{cookieCount}</p>

      <p>Cookie Multiplier:{cookieMulti}</p>
      <p>{multiplier()}</p>
    </>
  );
}

export default BiscuitClicker;
