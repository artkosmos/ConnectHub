import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {DialogType, MessageType, PostType} from "./index";

type AppPropsType = {
  posts: PostType[]
  messages: MessageType[]
  dialogs: DialogType[]
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <div className="menuAndContentWrapper">
          <Menu />
          <div className="contentWrapper">
            <Route path="/profile" render={() => <Profile posts={props.posts}/>}/>
            <Route path="/dialogs" render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
// Route(встроенный компонент) позволяет отслеживать изменения url, показывая необходимый компонент
// NavLink(встроенный компонент) позволяет менять url страницы не перезагружая ее целиком
export default App;
