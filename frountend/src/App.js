import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Header from "./components/Header";





function Landingpage() {
  return (
    <Router>
     <Switch>
        <Route exact path="/" component={Header}/>
       
      </Switch>
      
    </Router>
  );
}

export default Landingpage; 