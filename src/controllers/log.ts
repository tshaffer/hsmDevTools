import * as fs from 'fs-extra';
import isomorphicPath from 'isomorphic-path';
import { HsmDevToolsModelState } from '../type';

export const loadLog = () => {
  return (dispatch: any, getState: any) => {

    const pathToParent = '/Users/tedshaffer/Documents';
    const pathToLog = isomorphicPath.join(pathToParent, 'hsmEventLog.json');

    return fs.readFile(pathToLog, 'utf8')
      .then((logStr: string) => {
        const log: HsmDevToolsModelState = JSON.parse(logStr);
        const hsmDevToolsModelState: HsmDevToolsModelState = log;
        return Promise.resolve(hsmDevToolsModelState);
      });
  };
};
