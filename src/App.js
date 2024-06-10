import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SigninPageO from "./pages/signino";
import Nodal from "./nodal/Nodal";
import Ambrozy from "./components/Signin/ambrozy";
import Kunegunda from "./components/Signin/kunegunda";
import Andrzej from "./components/Signin/andrzej";
import Franciszka from "./components/Signin/franciszka";
import Jozef from "./components/Signin/jozef";
import Helena from "./components/Signin/helena";
import Karol from "./components/Signin/karol";
import Tekla from "./components/Signin/tekla";
import Signin from "./components/Signin";
import Pawel from "./components/Signin/pawel";
import Katarzyna from "./components/Signin/katarzyna";
import Jan from "./components/Signin/jan";
import Agnieszka from "./components/Signin/agnieszka";
import Józef from "./components/Signin/józef";
import Marianna from "./components/Signin/marianna";
import Tomasz from "./components/Signin/tomasz";
import Zofia from "./components/Signin/zofia";
import ScrollToTopButton from "./ScrollToTopButton";
import { DarkOverlayProvider } from "./context/DarkOverlayContext";
import { PopupContainer } from "./components/PopupElements";

function App() {
  return (
    <Router>
      <DarkOverlayProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/prag" component={SigninPage} />
          <Route path="/prao" component={SigninPageO} />
          <Route path="/nodal" component={Nodal} exact />
          <Route path="/tomasz" component={Tomasz} />
          <Route path="/zofia" component={Zofia} />
          <Route path="/ambrozy" component={Ambrozy} />
          <Route path="/kunegunda" component={Kunegunda} />
          <Route path="/andrzej" component={Andrzej} />
          <Route path="/franciszka" component={Franciszka} />
          <Route path="/jozef" component={Jozef} />
          <Route path="/helena" component={Helena} />
          <Route path="/karol" component={Karol} />
          <Route path="/tekla" component={Tekla} />
          <Route path="/signin" component={Signin} />
          <Route path="/pawel" component={Pawel} />
          <Route path="/katarzyna" component={Katarzyna} />
          <Route path="/jan" component={Jan} />
          <Route path="/agnieszka" component={Agnieszka} />
          <Route path="/józef" component={Józef} />
          <Route path="/marianna" component={Marianna} />
        </Switch>
        <ScrollToTopButton />
        {/* <PopupContainer /> */}
      </DarkOverlayProvider>
    </Router>
  );
}

export default App;
