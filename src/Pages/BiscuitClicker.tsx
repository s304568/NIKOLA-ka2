import { useEffect } from "react";
import { Link } from "react-router-dom";
import { INDEX_PATH, TempetureCheeker_PATH } from "../constants/paths";

function BiscuitClicker() {
  useEffect(() => {
    document.title = " Biscuit Clicker";
  });

  return (
    <>
      <h1>This is the Home Page.</h1>
      <p>
        Here is a link to the<Link to={INDEX_PATH}>Home Page.</Link>
      </p>
      <p>
        Here is a link to the
        <Link to={TempetureCheeker_PATH}>Tempeture Cheeker Page.</Link>
      </p>
    </>
  );
}

export default BiscuitClicker;
