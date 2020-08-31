import { Action } from 'redux';

export interface HsmDevToolsBaseAction extends Action {
  type: string;
  payload: {} | null;
}

export interface HsmDevToolsModelBaseAction<T> extends Action {
  type: string;   // override Any - must be a string
  payload: T;
  error?: boolean;
  meta?: {};
}

export interface TagAction<T> extends HsmDevToolsBaseAction {
  payload: T;
}
