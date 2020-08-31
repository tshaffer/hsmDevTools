/** @module Model:base */

import {
  combineReducers
} from 'redux';
import { eventsReducer } from './events';
import { HsmDevToolsModelState } from '../type';

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const rootReducer = combineReducers<HsmDevToolsModelState>({
  events: eventsReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
