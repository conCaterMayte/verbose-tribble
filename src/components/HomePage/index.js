import React from "react";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={css.main}>
       <section className={css.section}>
        <div>
        <h1 className={css.heading}>LIGHTNING QUIZ!</h1>
          <p>Got a couple of minutes to spare?</p>
          <p>Put your knowledge to the test with our lightning-fast quiz!</p>
          <button onClick>PLAY</button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
