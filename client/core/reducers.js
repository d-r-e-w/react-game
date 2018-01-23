import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import squares from './modules/square/squareReducer';
import round from './modules/round/roundReducer';
import session from './modules/session/sessionReducer';

const rootReducer = combineReducers({
    routing,
    squares,
    round,
    session
});

export default rootReducer;
