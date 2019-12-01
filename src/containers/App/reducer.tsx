import { ActiveState, Action } from "../../components/AppContext";
import { WeatherStatus } from "../../types";

export const reducer = (state: ActiveState, action: Action): ActiveState => {
  console.log("reducer called");
  switch (action.type) {
    case "success":
      return {
        status: "success",
        results: {
          location: "Norman, OK",
          status: WeatherStatus.Clear,
          degrees: 40
        }
      };

    case "failure":
      return {
        status: "error",
        error: "Not Found"
      };

    default:
      return state;
  }
};
