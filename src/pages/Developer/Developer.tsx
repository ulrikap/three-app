import { useEffect } from "react";
import { Link } from "react-router-dom";
import { rotate } from "../../world/Camera";
import "./Developer.scss";

const Developer = () => {
  useEffect(() => {
    rotate("developer");
  }, []);
  return (
    <div className={"developer-container"}>
      <h1>Developer</h1>
      <h3>[ dih-vel-uh-per ]</h3>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Developer;
