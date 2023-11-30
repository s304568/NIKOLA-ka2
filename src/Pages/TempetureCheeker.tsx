import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiscuitClicker_PATH, INDEX_PATH } from "../constants/paths";

function TempetureCheeker() {
  useEffect(() => {
    document.title = "Tempeture Cheeker";
  });

  return (
    <>
      <h1>This is the Home Page.</h1>
      <p>
        Here is a link to the
        <Link to={INDEX_PATH}>Home Page.</Link>
      </p>
      <p>
        Here is a link to the
        <Link to={BiscuitClicker_PATH}>Biscuit Clicker Page.</Link>
      </p>
    </>
  );
}

export default TempetureCheeker;
