import "../scss/Title.scss";
import { rotate } from "../world/Camera";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Title = ({
  setAnimation,
  animation,
}: {
  setAnimation: any;
  animation: boolean;
}) => {
  const history = useHistory();

  useEffect(() => {
    //rotate("original");
  }, []);

  return (
    <div className={"title-container"}>
      <section>
        <h1 onClick={() => setAnimation(!animation)}>ULRIK PALMSTRØM</h1>
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
            <body>
              I am currently employed at mnemonic, as a frontend developer
            </body>
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
            <body>
              I have a bachelor's degree in UX design and have done a few projects 
              </body>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Title;
