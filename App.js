import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
function App() {
return (
  <div className="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
   
);
}
export default App;