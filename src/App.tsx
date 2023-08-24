import style from './App.module.scss';
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import RouterProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/LoginContainer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, StateType} from "./redux/redux-store";
import {checkAuthTC} from "./redux/auth-reducer";
import {InitializationAppStatusType} from "./redux/app-reducer";
import LinearProgress from '@mui/material/LinearProgress';


function App() {

  const dispatch = useDispatch<AppDispatch>()
  const initialization = useSelector<StateType, InitializationAppStatusType>(
    state => state.app.initialization)

  useEffect(() => {
    dispatch(checkAuthTC())
  })

  if (initialization === 'process') {
    return <LinearProgress sx={{height: '10px'}} />
  }

  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <HeaderContainer/>
        <div className={style.menuAndContentWrapper}>
          <Menu/>
          <div className={style.contentWrapper}>
            <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
            <Route exact path="/profile" component={RouterProfileContainer}/>
            <Route exact path="/profile/:userId" component={RouterProfileContainer}/>
            <Route path="/dialogs" component={DialogsContainer}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/users" component={UsersContainer}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

// Route(встроенный компонент) позволяет отслеживать изменения url, показывая необходимый компонент
// NavLink(встроенный компонент) позволяет менять url страницы не перезагружая ее целиком
export default App;
