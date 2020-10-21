import React, { useState } from 'react';
import QuestionCard from './questionCard'
import { fetchQuestions, Difficulty, QuestionState } from '../../API';
import Menu from '../menu/menu';
import Instruction from '../instruction/instruction';

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const Quiz = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswer, setuserAnswer] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [totalQuesion, settotalQuestion] = useState(10);
    const [selectedAns, setSelectedAns] = useState("");
    
    const startTrivia = async () => {
        setLoading(true);
        setScore(0);
        setNumber(0);
        setGameOver(false);
        const newQuestions = await fetchQuestions(10, Difficulty.MEDIUM);
        setQuestions(newQuestions);
        setLoading(false);
    }

    const nextQuestion = (e: any) => {
        const checkAns = selectedAns === questions[number].correct_answer
        if (checkAns) setScore((prev) => prev + 1);
        setNumber(number + 1);
        if (totalQuesion === number + 1) {
            setGameOver(true);
            console.log("test");
        }
    }

    const checkAnswer = (e: any) => {
        setSelectedAns(e.currentTarget.value);
    }
    return (
        <div className="container-fluid">
            <Menu />
            {gameOver ?
                <Instruction
                    score={score}
                    onclick={startTrivia}
                    gameOver={gameOver}
                /> : null}
            {loading && <p>Loading Question....</p>}
            {!loading && !gameOver && (
                <div className="card questioncart">
                    <QuestionCard
                        questionNr={number + 1}
                        totalQuestions={totalQuesion}
                        question={questions[number].question}
                        userAnswer={userAnswer ? userAnswer[number] : undefined}
                        answers={questions[number].answers}
                        callback={checkAnswer}
                        score={score}
                    />
                    <div className="card-footer text-muted">
{ !gameOver ? <button className = "btn btn-primary" onClick = {nextQuestion} >Next Question</button> : null }
                        {/* { !gameOver ? <button className="btn btn-primary" onClick={nextQuestion}​​​​​​​​ > Next Question </button> : null } */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
