import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    questionNr: number;
    userAnswer: any;
    totalQuestions: number;
    score: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, questionNr, totalQuestions, score }) =>
    (
        <React.Fragment>
            <div className="card-header">
                <h4 className="h4">Knowledge Check</h4>
                <p className="card-text" > Question  {questionNr} of {totalQuestions} <span className="score" > Score: {score}​​​​​​​​</span ></p >
            </div >
            <div className="card-body" >
                <h5 className="card-title" > Question: {question}​​​​​​​​</h5 >
                <div className="instruction" > <p className="card-text" > Instruction: Choose any one from the below options</p ></div >
                <form>
                    {answers.map((answer: any) => (
                        <div className="col-md-12 option" key={answer} >
                            <label className="radio" >
                                <span className="radio_input">
                                    <input
                                        type="radio"
                                        name="radio"
                                        value={answer}
                                        className="radio-style"
                                        onChange={callback}
                                    /></span>
                                {answer}
                            </label >
                        </div >
                    ))}
                </form >
            </div >
        </React.Fragment >
    );

export default QuestionCard;