import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {reduxStore, StateType} from "./redux/redux-store";

export const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <App
      state={state}
      store={reduxStore}
      dispatch={reduxStore.dispatch.bind(reduxStore)}
      messageValue={reduxStore.getState().dialogPage.newMessage}
    />,
    document.getElementById('root'));
}

renderEntireTree(reduxStore.getState()) // for first render with state

reduxStore.subscribe(() => {
  let state = reduxStore.getState()
  renderEntireTree(state)
})
