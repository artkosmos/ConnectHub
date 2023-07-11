import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <div className="menuAndContentWrapper">
          <Menu />
          <div className="contentWrapper">
            <Route path="/profile" component={Profile}/>
            <Route path="/dialogs" component={DialogsContainer}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" component={UsersContainer}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
// Route(встроенный компонент) позволяет отслеживать изменения url, показывая необходимый компонент
// NavLink(встроенный компонент) позволяет менять url страницы не перезагружая ее целиком
export default App;
