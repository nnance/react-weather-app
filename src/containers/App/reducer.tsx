import { ActionTypes, StateStatus, ActiveState, Action } from "../../types";

export const reducer = (state: ActiveState, action: Action): ActiveState => {
  switch (action.type) {
    case ActionTypes.setLocation:
      return {
        status: StateStatus.set,
        location: action.location
      };

    case ActionTypes.setStatus:
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.loading };

    case ActionTypes.setResults:
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.success, results: action.results };

    case ActionTypes.setError:
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.error, error: action.error };

    default:
      return state;
  }
};
