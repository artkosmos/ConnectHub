import './index.css';
import {addPost, changePost, state, StateType, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App
      state={state}
      addPostCallback={addPost}
      changePostCallback={changePost}
      postValue={state.profilePage.newPost}
    />,
    document.getElementById('root'));
}

renderEntireTree(state) // for first render with state
subscriber(renderEntireTree) // for calling rerender in state.ts
