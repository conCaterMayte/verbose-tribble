import React from "react";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={css.main}>
      <h1 className={css.heading}>HOME</h1>
      <section className={css.section}>
        <div>
          <h1>Lightning Quiz!</h1>
          <br />
          <p>Got a couple of minutes to spare?</p>
          <p>Put your knowledge to the test with our lightning-fast quiz!</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
