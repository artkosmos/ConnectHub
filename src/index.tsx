import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {StateType, store} from "./redux/store";

export const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
      postValue={store.getState().profilePage.newPost}
      messageValue={store.getState().dialogPage.newMessage}
    />,
    document.getElementById('root'));
}

renderEntireTree(store.getState()) // for first render with state
store.subscriber(renderEntireTree) // for calling rerender in store.ts
