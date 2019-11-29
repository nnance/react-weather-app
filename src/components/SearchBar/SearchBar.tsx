import React from "react";

import classes from "./SearchBar.module.css";
import Button from "../../elements/Button/Button";
import InputField from "../../elements/InputField/InputField";
import { ButtonPosition } from "../../types";

const SearchBar: React.FC = () => {
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
      >
        Set
      </Button>
    </div>
  );
};

export default SearchBar;
