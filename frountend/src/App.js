import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Signinpage from "./pages/Signinpage";
import Registerpage from "./pages/Registerpage";
import Userpage from "./pages/Userpage";
import Searchsection from "./pages/Searchsection";

function Landingpage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Searchsection} />
        <Route exact path="/singinpage" component={Signinpage} />
        <Route exact path="/registerpage" component={Registerpage} />
        <Route exact path="/userpage" component={Userpage} />
      </Switch>
    </Router>
  );
}

export default Landingpage;
