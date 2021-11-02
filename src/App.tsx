import "./App.scss";
import World from "./world/World";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [flip, setflip] = useState(false);
  return (
    <div className="App">
      <World {...{ flip }} />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <div>Add routes here!</div>
              <Link to="/test">Click me</Link>
            </div>
          </Route>
          <Route path="/test">
            <div>This is react specifics!</div>
            <Link to="/">go back</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
