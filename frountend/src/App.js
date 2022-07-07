import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";





function Landingpage() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Body}/>
       
      </Switch>
      
    </Router>
  );
}

export default Landingpage; 