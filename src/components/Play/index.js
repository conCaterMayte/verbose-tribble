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
    console.log ("hello")
  }
  getQuiz()
}
)


  return (
    <main className={css.main}>
      <h1 className={css.heading}>Play our quiz!</h1>
      <div className={css.container}>
        <section>
          <p>You know you want to!</p>
          <div>
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
