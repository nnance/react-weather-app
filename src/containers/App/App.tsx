import React from "react";

import classes from "./App.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../elements/Card/Card";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";

type Props = {
  status: string;
  degrees: number;
};

const App: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes.AppWrapper}>
      <Header color={"#C0B3BC"} />
      <main className={classes.AppMain}>
        <SearchBar />
        <Card>
          <WeatherDetails status={props.status} degrees={props.degrees} />
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default App;
