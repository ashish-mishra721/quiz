import React from 'react';

type Props = {
    score: any,
    onclick: any
    gameOver: any
}
 
const instruction: React.FC<Props> = ({ score, onclick, gameOver }) => {
    return (
        <div className="jumbotron start">
            {score === 0 && gameOver ? 
                <React.Fragment>
                    <h4 className="display-4">Instuction</h4>
                    <p className="lead">Do not refresh the page once test started</p>
                    <p className="lead">Read the questions first,once you click on the next question,you can not go to previous  question</p> 
                </React.Fragment> : 
                <React.Fragment>
                    <h4 className="display-4">Congratulations</h4>
                    <p className="lead">Quiz submitted Successfully</p>
                    <p className="lead">Your score: <b>{ score }</b></p> 
                </React.Fragment> 
            }
            <hr className="my-4"></hr>
            <p>Click on start the Quiz</p>
            <a className="btn btn-primary btn-lg" role="button" onClick={onclick}>Start</a>
        </div>
    );
}
export default instruction;