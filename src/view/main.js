import React , { Component } from "react";
import Index from "./index";
import About from "./about/about.js";
import User from "./user/user.js";
import Details from "./details/details.js";
import Book from "./book/book.js";
import { Route , Switch ,  Redirect  }  from "react-router-dom";

class Main extends Component {
    render(){
        return (   <Switch >
                    <Route path="/" exact render={()=> <Redirect to="/index/all"/>} />
                    <Route path="/index/:id" component={Index}/>
                    <Route path="/book" component={Book}/>
                    <Route path="/user/:id" component={User}/>
                    <Route path="/about" component={About}/>
                    <Route path="/details/:id" component={Details}/>
                   </Switch>
        )
    }
}

export  default  Main;
