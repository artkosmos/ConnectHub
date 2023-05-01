import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="appWrapper">
      <Header />
      <div className="menuAndProfileWrapper">
        <Menu />
        <Profile />
      </div>
    </div>
  );
}

export default App;
