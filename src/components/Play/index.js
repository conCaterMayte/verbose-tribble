import React, {useState, useEffect} from "react";
import css from "./Play.module.css";

function Play() {
const [quiz, setQuiz] = useState('')
//Fetch general knowledge question
useEffect(() =>{
  async function getQuiz(){
    const response = await fetch (`https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`)
    const jsonResponse = await response.json();
    setQuiz(jsonResponse.quiz)
  }
}
)

  return (
    <main className={css.main}>
      <h1 className={css.heading}>Play our quiz!</h1>
      <div className={css.container}>
        <section>
          <p>You know you want to!</p>
          <div>
            <getQuiz/>
          </div>
        </section>
      </div>
      
    </main>
  );
}

export default Play;
