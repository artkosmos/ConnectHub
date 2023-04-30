import React from 'react';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="menu-and-profile-wrapper">
        <Menu />
        <Profile />
      </div>
    </div>
  );
}

export default App;
