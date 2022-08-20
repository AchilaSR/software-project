import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Signinpage from "./pages/Signinpage";
import Registerpage from "./pages/Registerpage";
import Commentpage from "./pages/Commentpage";

function Landingpage() {
  return (
    <Router>
     <Switch>
     <Route exact path="/" component={Commentpage}/>
        <Route exact path="/singinpage" component={Signinpage}/>
        <Route exact path="/registerpage" component={Registerpage}/>
       
      </Switch>
      
    </Router>
  );
}

export default Landingpage; 