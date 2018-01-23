import { List, fromJS } from 'immutable';
import { constants } from '../../constants';

const initialState = fromJS(
    [
        {
            "id": 0,
            "color": "#2ecc71",
            "active": false,
        },
        {
            "id": 1,
            "color": "#3498db",
            "active": false,
        },
        {
            "id": 2,
            "color": "#f39c12",
            "active": false,
        },
        {
            "id": 3,
            "color": "#e74c3c",
            "active": false,
        }
    ]
);

const squares = (state = initialState, action) => {
  switch (action.type) {
    case constants.square.ACTIVATE:
      return state.setIn([action.payload.index, 'active'], true);

    case constants.square.DEACTIVATE:
      return state.setIn([action.payload.index, 'active'], false);

    case constants.square.RESET:
      return initialState;

    default:
      return state;
  }
};

export default squares;
