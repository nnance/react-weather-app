import React from "react";

import classes from "./SearchBar.module.css";
import Button from "../../elements/Button/Button";
import InputField from "../../elements/InputField/InputField";
import { ButtonPosition } from "../../types";
import { useStateValue } from "../AppContext";
import { ActionTypes } from "../../api/reducer";

const SearchBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeState, dispatch] = useStateValue();
  const [location, setLocation] = React.useState<string>();

  const toggleActiveState = (): void => {
    if (location) {
      dispatch({ type: ActionTypes.setLocation, location });
    }
  };

  return (
    <div className={classes.SearchBarWrapper}>
      <InputField
        type="text"
        name="city"
        label="Location"
        placeholder="Enter a city"
        onChange={(event): void => setLocation(event.target.value)}
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
