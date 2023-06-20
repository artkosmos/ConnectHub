import ReactDOM from "react-dom";
import {addPost, StateType} from "./redux/state";
import App from "./App";

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App state={state} addPostFn={addPost}/>, document.getElementById('root'));
}