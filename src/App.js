import React from 'react';
import Header from './Component/Header'
import TinderCards from './Component/TinderCard'
import Chats from './Component/Chats'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SwipeButtons from './Component/SwipeButtons'
import ChatScreen from './Component/ChatScreen'
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
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

// div className="App">
//       <h1>Letsbuild a Tinder Clone</h1>

//       {/* Header */}
//       <Header />
//       {/* Tinder Cards */}
//       {/* Buttons below tinder cards */}

//       {/* Chat Screen  */}
//       {/* Indivisual Chat Screen */}
//     </div>

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },
// "scripts": {
//   "dev": "react-scripts start",
//   "start": "serve -s build",
//   "build": "react-scripts build",
//   "test": "react-scripts test --env=jsdom",
//   "eject": "react-scripts eject",
//   "heroku-postbuild": "npm run build"
// },