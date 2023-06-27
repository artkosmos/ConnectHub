import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <div className="menuAndContentWrapper">
          <Menu />
          <div className="contentWrapper">
            <Route path="/profile" render={() => <Profile
              store={props.store}
            />}/>
            <Route path="/dialogs" render={() => <DialogsContainer
              store={props.store}
            />}/>
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
