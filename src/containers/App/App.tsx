import React from "react";

import classes from "./App.module.css";
import Header from "../../components/Header/Header";
import AppMain from "../../components/AppMain/AppMain";
import Footer from "../../components/Footer/Footer";
import { StateProvider, StateContext } from "../../components/AppContext";
import { reducer, StateStatus } from "../../api/reducer";

const App: React.FC = () => {
  return (
    <StateProvider
      initialState={{ status: StateStatus.empty }}
      reducer={reducer}
    >
      <StateContext.Consumer>
        {([state]): React.ReactFragment => (
          <div className={classes.AppWrapper}>
            <Header state={state} />
            <AppMain state={state} />
            <Footer />
          </div>
        )}
      </StateContext.Consumer>
    </StateProvider>
  );
};

export default App;
