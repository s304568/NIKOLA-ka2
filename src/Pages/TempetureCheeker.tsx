import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiscuitClicker_PATH, INDEX_PATH } from "../Constants/paths";
import "../index.css"

function TempetureCheeker() {
  useEffect(() => {
    document.title = "Tempeture Cheeker";
  });

  return (
    <>
      <h1>This is the Tempeture Cheeker Page</h1>
    </>
  );
}

export default TempetureCheeker;
