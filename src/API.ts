export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export enum Difficulty {
    EASY = 'easy',
    HARD = 'hard',
    MEDIUM = 'medium'
}
export type QuestionState = Question & { answers: string[] };

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint =  `https://opentdb.com/api.php?amount=${ amount }&difficulty=${ difficulty }&type=multiple`;
    // const endpoint = `https://opentdb.com/api.php?amount=${amount}​​​​​​​​&difficulty=${difficulty}​​​​​​​​&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data);
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: [...question.incorrect_answers, question.correct_answer]
        }
    ))
};