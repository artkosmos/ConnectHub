import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {StateType, store} from "./redux/state";

export const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
      postValue={store.getState().profilePage.newPost}
    />,
    document.getElementById('root'));
}

renderEntireTree(store.getState()) // for first render with state
store.subscriber(renderEntireTree) // for calling rerender in state.ts
