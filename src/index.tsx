import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {reduxStore} from "./redux/redux-store";

export const renderEntireTree = (state: any) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={reduxStore.dispatch.bind(reduxStore)}
      postValue={reduxStore.getState().profilePage.newPost}
      messageValue={reduxStore.getState().dialogPage.newMessage}
    />,
    document.getElementById('root'));
}

renderEntireTree(reduxStore.getState()) // for first render with state

reduxStore.subscribe(() => {
  let state = reduxStore.getState()
  renderEntireTree(state)
})
