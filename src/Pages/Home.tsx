import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiscuitClicker_PATH, TempetureCheeker_PATH } from "../constants/paths";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <h1>This is the Home Page.</h1>
      <p>
        Here is a link to the
        <Link to={BiscuitClicker_PATH}>Biscuit Clicker Page.</Link>
      </p>
      <p>
        Here is a link to the
        <Link to={TempetureCheeker_PATH}>Tempeture Cheeker Page.</Link>
      </p>
    </>
  );
}

export default Home;
