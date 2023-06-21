import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/state";

export const renderEntireTree = (state: any) => {
  ReactDOM.render(
    <App
      state={state}
      addPostCallback={store.addPost.bind(store)}
      changePostCallback={store.changePost.bind(store)}
      postValue={store.getState().profilePage.newPost}
    />,
    document.getElementById('root'));
}

renderEntireTree(store.getState()) // for first render with state
store.subscriber(renderEntireTree) // for calling rerender in state.ts
