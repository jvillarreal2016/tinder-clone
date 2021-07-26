import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen.js';


function App() {
  return (
    <div className="App">
      
      <Router>
          <Switch>
            <Route path="/chats/:person"> {/* colon represents wild card, any value can go in there*/}
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chats">
              <Header backButton="/"/>
              <Chats />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

