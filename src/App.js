import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SigninPageO from "./pages/signino";
import Nodal from "./nodal/Nodal";
import ambrozy from "./components/Signin/ambrozy";
import andrzej from "./components/Signin/andrzej";
import jozef from "./components/Signin/jozef";
import karol from "./components/Signin/karol";
import Signin from "./components/Signin";
import pawel from "./components/Signin/pawel";
import jan from "./components/Signin/jan";
import józef from "./components/Signin/józef";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/prag" component={SigninPage} />
        <Route path="/prao" component={SigninPageO} />
        <Route path="/nodal" component={Nodal} exact />
        <Route path="/ambrozy" component={ambrozy} />
        <Route path="/andrzej" component={andrzej} />
        <Route path="/jozef" component={jozef} />
        <Route path="/karol" component={karol} />
        <Route path="/signin" component={Signin} />
        <Route path="/pawel" component={pawel} />
        <Route path="/jan" component={jan} />
        <Route path="/józef" component={józef} />
      </Switch>
    </Router>
  );
}

export default App;
