import React, {useState, useEffect} from "react";
//import {useSpring, animated} from 'react-spring';
import css from "./Play.module.css";


function Play() {
const [quiz, setQuiz] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(true);
  //Fetch general knowledge question
  useEffect(() => {
    async function getQuiz() {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`
      );
      const jsonResponse = await response.json();
      const questionObject = jsonResponse.results;
      const question = questionObject[0].question;
      const rightAnswer = questionObject[0].correct_answer;
      setQuiz(question);
      setCorrectAnswer(rightAnswer);
    }
    getQuiz();
  }, []);

  return (
    <main className={css.main}>
      <h1 className={css.heading}>Play our quiz!</h1>
      <div>
        <section>
          <h3>You know you want to!</h3>
          <div className={css.quizOnject}>
            <p>{quiz}</p>
            <button>True</button>
            <button>False</button>
          </div>
        </section>
      </div>
      
    </main>
  );
}

export default Play;
