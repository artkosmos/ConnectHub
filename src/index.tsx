import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {reduxStore, StoreType} from "./redux/redux-store";

export const renderEntireTree = (state: StoreType) => {
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
