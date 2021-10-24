import "../scss/Title.scss";
import { rotate } from "../world/Camera";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Title = () => {
  const history = useHistory();

  useEffect(() => {
    rotate("original");
  }, []);

  return (
    <div className={"title-container"}>
      <section>
        <h1>ULRIK PALMSTRØM</h1>
        <br />
        <section>
          <div>
            <h2
              onClick={() => {
                history.push("developer");
              }}
            >
              DEVELOPER
            </h2>
            <h3>[ dih-vel-uh-per ]</h3>
          </div>
          <div>
            <h2
              onClick={() => {
                history.push("designer");
              }}
            >
              UX DESIGNER
            </h2>
            <h3>[ dih-zahy-ner ]</h3>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Title;
