import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Header from "./pages/layout/header/header";
import * as serviceWorker from "./serviceWorker";
import Siderbar from "./pages/layout/sidebar";
import { createStore } from "redux";
import { counter } from "./redux";
import { Provider } from "react-redux";
import SiderDemo from "../src/pages/layout/index";


import "./App.css";
const store = createStore(counter);

// ReactDOM.render(
// <Provider store={store}>
//     <Router>
//         <div className='wrapper'>
//             <div className='siderbar'><Siderbar /></div>
//             <div className='main'>
//                 <div className='header'><Header /></div>
//                 <div className='content'>
//                     <Route path='/page1' component={Page1} />
//                     <Route path='/page2' component={Page2} />
//                 </div>
//             </div>
//         </div>
//     </Router>
// </Provider>
// , document.getElementById('root'));
ReactDOM.render(<Router><SiderDemo /></Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
