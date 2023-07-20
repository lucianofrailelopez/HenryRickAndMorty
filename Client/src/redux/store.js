import { createStore, applyMiddleware, compose } from "redux";
// composeWithDevtools(applyMiddleware(thunk)) > para configurar la extension de chrome de REDUX despues de instalar devtools-extension
import reducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;
