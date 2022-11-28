
import React from "react";
import './App.css';
import Header from './Header';
import PageComponent from "./PageComponent";
import { ContentComponent1, ContentComponent2, ContentComponent3 } from './ContentComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="App" id="container1">
      <Header />
      <ContentComponent1 />
      <ContentComponent2 />
      <ContentComponent3 />
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/pagecomponent" component={PageComponent} />

        </Routes>
      </Router>

    </div>
  );
}

// function App() {
//   return (
//     <div className="App" id="container1">

//       <h1>HHHH</h1>

//     </div>
//   );
// }

export default App;
