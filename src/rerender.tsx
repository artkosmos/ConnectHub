import ReactDOM from "react-dom";
import {addPost, changePost, StateType} from "./redux/state";
import App from "./App";

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App
      state={state}
      addPostCallback={addPost}
      changePostCallback={changePost}
      postValue={state.profilePage.newPost}
    />,
    document.getElementById('root'));
}