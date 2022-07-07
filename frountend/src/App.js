import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Firstpage from "./pages/Firstpage";





function Landingpage() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Firstpage}/>
       
      </Switch>
      
    </Router>
  );
}

export default Landingpage; 