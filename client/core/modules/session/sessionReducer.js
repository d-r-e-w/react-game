import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map(
    {
        'clicked_squares': [],
        'started': false,
        'started_reproduction': false,
        'pattern': [],
    }
);

const session = (state = initialState, action) => {
  switch (action.type) {
    case constants.session.END:
      return state.setIn(['ended'], true).setIn(['started'], false);
    case constants.session.RESTART:
        return initialState.setIn(['started'], true);
    case constants.session.START:
        return initialState.setIn(['started'], true);
    case constants.session.SET_PATTERN:
        return state.setIn(['pattern'], action.payload.pattern);
    case constants.session.START_REPRODUCTION:
        return state.setIn(['started_reproduction'], true).setIn(['clicked_squares'], []);
    case constants.session.END_REPRODUCTION:
      return state.setIn(['started_reproduction'], false);
    case constants.session.CLICK:
        return state.setIn(['clicked_squares'], action.payload.clickedSquares);
    case constants.session.SET_WON:
        return state.setIn(['won'], action.payload.won);
    default:
      return state;
  }
};

export default session;
