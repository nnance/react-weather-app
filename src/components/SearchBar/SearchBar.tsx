import React from "react";

import classes from "./SearchBar.module.css";
import Button from "../../elements/Button/Button";
import InputField from "../../elements/InputField/InputField";
import { ButtonPosition } from "../../types";

type Props = {
  onClick: () => void;
};

const SearchBar: React.FC<Props> = (props: Props) => {
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
        onClick={props.onClick}
      >
        Set
      </Button>
    </div>
  );
};

export default SearchBar;
