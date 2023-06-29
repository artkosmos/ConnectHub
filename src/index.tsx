import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {reduxStore, StateType} from "./redux/redux-store";
import {Provider} from "react-redux";

export const renderEntireTree = (state: StateType) => {
  ReactDOM.render(
      <Provider store={reduxStore}>
        <App/>
      </Provider>,
    document.getElementById('root'));
}

renderEntireTree(reduxStore.getState()) // for first render with state

reduxStore.subscribe(() => {
  let state = reduxStore.getState()
  renderEntireTree(state)
})