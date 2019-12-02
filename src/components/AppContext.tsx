import React, { createContext, useContext, useReducer } from "react";
import { ActiveState, Action, StateStatus } from "../types";

type Props = React.PropsWithChildren<{
  reducer: React.Reducer<ActiveState, Action>;
  initialState: ActiveState;
}>;

type StateContextReducer = [ActiveState, React.Dispatch<Action>];

export const StateContext = createContext<StateContextReducer>([
  { status: StateStatus.empty },
  (): ActiveState => ({ status: StateStatus.empty })
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
