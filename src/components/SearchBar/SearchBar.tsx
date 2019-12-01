import React from "react";

import classes from "./SearchBar.module.css";
import Button from "../../elements/Button/Button";
import InputField from "../../elements/InputField/InputField";
import { ButtonPosition, WeatherStatus } from "../../types";
import { useStateValue } from "../AppContext";

const SearchBar: React.FC = () => {
  const [activeState, dispatch] = useStateValue();

  const toggleActiveState = (): void => {
    if (activeState.status === "empty") {
      dispatch({
        type: "success",
        results: {
          location: "Norman, OK",
          status: WeatherStatus.Clear,
          degrees: 40
        }
      });
    } else if (activeState.status === "success") {
      dispatch({ type: "failure", error: "Not Found" });
    } else {
      dispatch({ type: "request" });
    }
  };

  return (
    <div className={classes.SearchBarWrapper}>
      <InputField
        type="text"
        name="city"
        label="Location"
        placeholder="Enter a city"
      />
      <Button
        name="searchSubmit"
        type="submit"
        position={ButtonPosition.onForm}
        onClick={toggleActiveState}
      >
        Set
      </Button>
    </div>
  );
};

export default SearchBar;
