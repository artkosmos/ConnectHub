import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {reduxStore} from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
  <Provider store={reduxStore}>
    <App/>
  </Provider>,
  document.getElementById('root'));

