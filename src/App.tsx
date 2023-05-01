import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";

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
