import React from 'react';
import Square from '../../components/Square';
import { connect } from 'react-redux';
import { startSession, restartSession, squareClick } from '../../core/modules/session/sessionActions';
import { setRound } from '../../core/modules/round/roundActions';

class Main extends React.Component {
    render() {
        let button = null;
        let scoreArea = null;
        let scoreText = null;
        let buttonText = "Start game";

        if (this.props.won) {
            scoreText = "You won";
            buttonText = "Next round";
        } else if (this.props.roundEnded){
            buttonText = "Try again";
            scoreText = "You lost";
        }


        if (!this.props.sessionStarted || this.props.roundEnded) {
            button = <button className="btn btn-primary" onClick={() => this.playGame()}>{buttonText}</button>;
            scoreArea = <h5>{scoreText}</h5>;
        } else {
            button = null;
            scoreArea = null;
        }


        return (
            <div className="container">
                <h4>Round: {this.props.round }</h4>

                <div className="squares">
                    {this.props.squares ?
                        this.props.squares.map((square, i) => {
                                return (
                                    <Square
                                        color={square.get('color')}
                                        active={square.get('active')}
                                        click={() => this.props.squareClick(this.props.clickedSquares, i)}
                                        disabled={this.props.reproductionStarted}
                                    />
                                );
                        }

                        )
                        : null
                    }
                </div>

                <div className="row">
                    <div className="col-xs-12 text-center">
                        { scoreArea }
                        { button }
                    </div>
                </div>
            </div>
        );
    }

    playGame() {
        if (!this.props.won) {
            this.props.setRound(1);
            this.props.startSession();
        } else {
            this.props.setRound(this.props.round + 1);
            this.props.startSession();
        }
}
}

const mapStateToProps = state => ({
    squares: state.squares,
    round: state.round.get('name'),
    sessionEnded: state.session.get('ended'),
    sessionStarted: state.session.get('started'),
    reproductionStarted: state.session.get('started_reproduction'),
    clickedSquares: state.session.get('clicked_squares'),
    roundEnded: state.round.get('ended'),
    won: state.session.get('won'),
});

const mapDispatchToProps = dispatch => ({
    startSession: () => dispatch(startSession()),
    setRound: (round) => dispatch(setRound(round)),
    squareClick: (clickedSquares, id) => dispatch(squareClick(clickedSquares, id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
