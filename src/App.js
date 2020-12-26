import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SigninPageO from "./pages/signino";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/prag" component={SigninPage} />
        <Route path="/prao" component={SigninPageO} />
      </Switch>
    </Router>
  );
}

export default App;
