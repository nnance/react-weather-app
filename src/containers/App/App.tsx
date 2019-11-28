import React from "react";

import classes from "./App.module.css";
import Header from "../../components/Header/Header";

const App: React.FC = () => {
  return (
    <div className={classes.AppWrapper}>
      <Header color={"#C0B3BC"} onClickHandler={(): void => {}} />
      <main className={classes.AppMain}></main>
    </div>
  );
};

export default App;
