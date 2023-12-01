import { useEffect } from "react";
import { Link } from "react-router-dom";
import { INDEX_PATH } from "../Constants/paths";

function NotFoundPage() {
  useEffect(() => {
    document.title = "404";
  });
  return (
    <>
      <h1>This is the 404 Page.</h1>
      <p>
        Here is a link back to the <Link to={INDEX_PATH}>Home Page.</Link>
      </p>
    </>
  );
}

export default NotFoundPage;
