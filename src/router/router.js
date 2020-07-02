import React , { Component  } from "react";
import MainFooter from '../view/main-footer.js';
import MainHeader from '../view/main-header.js';
import Main from '../view/main.js';
import { BrowserRouter as Router } from 'react-router-dom';
import  { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducers/index.js';
let store = createStore( reducer , applyMiddleware( thunk ));
console.log(store.getState());
class RouteIndex extends Component {
     render(){
         console.log(this.props);
         return (
             <Router path="/">
                 <Provider store={store}>
                     <MainHeader/>
                     <Main/>
                     <MainFooter/>
                 </Provider>
             </Router>
         )
     }
}

export  default  RouteIndex;
