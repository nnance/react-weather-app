import React, { createContext, useContext, useReducer } from "react";
import { WeatherLocation } from "../types";

export type Action =
  | { type: "request" }
  | { type: "success"; results: WeatherLocation }
  | { type: "failure"; error: string };

export type ActiveState =
  | { status: "empty" }
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; results: WeatherLocation };

type Props = React.PropsWithChildren<{
  reducer: React.Reducer<ActiveState, Action>;
  initialState: ActiveState;
}>;

type StateContextReducer = [ActiveState, React.Dispatch<Action>];

export const StateContext = createContext<StateContextReducer>([
  { status: "empty" },
  (): ActiveState => ({ status: "empty" })
]);

export const StateProvider: React.FC<Props> = ({
  reducer,
  initialState,
  children
}: Props) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = (): StateContextReducer => {
  return useContext(StateContext);
};
