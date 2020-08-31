import * as fs from 'fs-extra';
import isomorphicPath from 'isomorphic-path';
import { HsmDevToolsModelState } from '../type';
import { addHsmEvent } from '../models';

export const loadLog = (): any => {
  return (dispatch: any, getState: any) => {

    const pathToParent = '/Users/tedshaffer/Documents';
    const pathToLog = isomorphicPath.join(pathToParent, 'hsmEventLog.json');

    return fs.readFile(pathToLog, 'utf8')
      .then((logStr: string) => {
        const log: HsmDevToolsModelState = JSON.parse(logStr);
        const hsmDevToolsModelState: HsmDevToolsModelState = log;
        for (const event of hsmDevToolsModelState.events) {
          dispatch(addHsmEvent(event));
        }
        console.log(getState());
        return Promise.resolve(hsmDevToolsModelState);
      });
  };
};
