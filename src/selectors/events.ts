import { HsmEvent, HsmDevToolsModelState } from '../type';

export const getHsmEvents = (state: HsmDevToolsModelState): HsmEvent[] => {
  return state.events;
};
