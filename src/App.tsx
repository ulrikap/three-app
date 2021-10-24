import "./App.scss";
import Title from "./components/Title";
import World from "./world/World";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Developer from "./pages/Developer/Developer";
import Designer from "./pages/Designer/Designer";

function App() {
  return (
    <div className="App">
      <World />
      <Router>
        <Switch>
          <Route exact path="/">
            <Title />
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>
          <Route path="/designer">
            <Designer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
