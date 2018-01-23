import { constants } from '../../constants';

export const endSession = () => ({
  type: constants.session.END,
  payload: {}
});

export const restartSession = () => ({
  type: constants.session.RESTART,
  payload: {}
});

export const startSession = () => ({
    type: constants.session.START,
    payload: {}
});

export const setPattern = (pattern) => ({
    type: constants.session.SET_PATTERN,
    payload: {
        pattern
    }
});

export const startReproduction = () => ({
    type: constants.session.START_REPRODUCTION,
    payload: {}
});

export const endReproduction = () => ({
    type: constants.session.END_REPRODUCTION,
    payload: {}
});

export const squareClick = (clickedSquares, id) => ({
    type: constants.session.CLICK,
    payload: {
        clickedSquares,
        id
    }
});

export const setWon = (won) => ({
    type: constants.session.SET_WON,
    payload: {
        won
    }
});
