import { Map } from 'immutable';
import { constants } from '../../constants';

const initialState = Map(
    {
        'name': 1,
        'ended': false,
    }
);

const round = (state = initialState, action) => {
  switch (action.type) {
    case constants.round.SET:
      return state.setIn(['name'], action.payload.round);
    case constants.round.ENDED:
      return state.setIn(['ended'], true);
    case constants.round.STARTED:
      return state.setIn(['ended'], false);
    case constants.round.DELETE:
        state.setIn(['ended'], false);
      return initialState;

    default:
      return state;
  }
};

export default round;
