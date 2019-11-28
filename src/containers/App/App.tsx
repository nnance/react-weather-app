import React from "react";

import classes from "./App.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className={classes.AppWrapper}>
      <Header color={"#C0B3BC"} />
      <main className={classes.AppMain}></main>
      <Footer />
    </div>
  );
};

export default App;
