import { constants } from '../../constants';

export const clickSquare = (square) => ({
    type: constants.square.CLICK,
    payload: {
      square
    }
});

export const resetSquares = () => ({
    type: constants.square.RESET,
    payload: {}
});

export const makeSquaresPattern = () => ({
    type: constants.square.MAKE_PATTERN,
    payload: {}
});

export const activateSquare = (index) => ({
    type: constants.square.ACTIVATE,
    payload: {
        index
    }
});

export const deactivateSquare = (index) => ({
    type: constants.square.DEACTIVATE,
    payload: {
        index
    }
});

