import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import Boxcon from './container/box-container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './style/build/main.css';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
  ));

const App = () => <Boxcon />;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
