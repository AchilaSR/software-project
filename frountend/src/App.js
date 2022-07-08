import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Signinpage from "./pages/Signinpage";





function Landingpage() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Signinpage}/>
       
      </Switch>
      
    </Router>
  );
}

export default Landingpage; 