import React,{useState} from "react"

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import Firebase from "firebase/app"
import "firebase/auth"

import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import PageNotFound from "./Pages/PageNotFound"
import { UserContext } from "./Context/UserContext";


const App = () => {

  const [user,setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
        <UserContext.Provider value={{user,setUser}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </UserContext.Provider>
    </Router>
  );
}

export default App;
