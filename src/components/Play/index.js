import React from "react";

import css from "./Play.module.css";

function BeetRoutePage() {
  return (
    <main className={css.main}>
      <h1 className={css.heading}>Play our quiz!</h1>
      <div className={css.container}>
        <section>
          <p>You know you want to!</p>
        </section>
      </div>
    </main>
  );
}

export default BeetRoutePage;
