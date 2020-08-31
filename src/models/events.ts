// ------------------------------------
// Constants
// ------------------------------------

import { HsmEvent } from '../type';
import { HsmDevToolsModelBaseAction } from './baseAction';

export const ADD_EVENT = 'ADD_EVENT';

// ------------------------------------
// Actions
// ------------------------------------

export const addHsmEvent = (
  event: HsmEvent,
) => {
  return {
    type: ADD_EVENT,
    payload: event,
  };
};

// ------------------------------------
// Reducer
// ------------------------------------

export const eventsReducer = (
  state: HsmEvent[] = [],
  action: HsmDevToolsModelBaseAction<HsmEvent>
): HsmEvent[] => {
  switch (action.type) {
    case ADD_EVENT: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
