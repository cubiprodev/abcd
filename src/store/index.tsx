
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';

import createReducer from './reducers';

let store = null;

const sagaMiddleware = createSagaMiddleware();

export function execute(saga, ...args) {
    return sagaMiddleware.run(saga, ...args).done;
}

export function bindToSaga(fn) {
    return (...args) => sagaMiddleware.run(fn, ...args).done;
}

export default function configureStore(initialState = {}) {
    let composeEnhancers = compose;

    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
        }
    }

    const middlewares = [thunkMiddleware, sagaMiddleware];

    const enhancers = [applyMiddleware(...middlewares)];

    store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers), 
    );

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    return store;
}

export { store };
