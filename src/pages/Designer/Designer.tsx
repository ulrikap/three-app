import { useEffect } from "react";
import { Link } from "react-router-dom";
import { rotate } from "../../world/Camera";
import "./Designer.scss";

const Designer = () => {
  useEffect(() => {
    rotate("designer");
  }, []);
  return (
    <div className={"designer-container"}>
      <h1>Designer</h1>
      <h3>[ dih-zahy-ner ]</h3>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Designer;
