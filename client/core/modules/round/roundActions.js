import { constants } from '../../constants';

export const setRound = (round) => {
  return {
    type: constants.round.SET,
    payload: {
      round
    }
  };
};

export const deleteRound = () => {
  return {
    type: constants.round.DELETE,
    payload: {}
  };
};

export const endedRound = () => {
    return {
        type: constants.round.ENDED,
        payload: {}
    };
};

export const startedRound = () => {
    return {
        type: constants.round.STARTED,
        payload: {}
    };
};
