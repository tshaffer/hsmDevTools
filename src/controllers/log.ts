import * as fs from 'fs-extra';
import isomorphicPath from 'isomorphic-path';
// import { HsmDevToolsModelState } from '../type';
// import { addHsmEvent } from '../models';

/*
var fs = require('fs');
var stream;
stream = fs.createReadStream('D://data.txt');

stream.on('data', function(data) {
    var chunk = data.toString();
    console.log(chunk);
});
*/

export const loadLog = (): any => {
  return (dispatch: any, getState: any) => {

    const pathToParent = '/Users/tedshaffer/Documents';
    const pathToLog = isomorphicPath.join(pathToParent, 'hsmEventLog.json');

    const stream = fs.createReadStream(pathToLog);

    stream.on('data', (data) => {
      const chunk = data.toString();
      console.log('read data');
      console.log(chunk);

      const eventStrs = chunk.split(/\r?\n/);
      for (const eventStr of eventStrs) {
        let eventObjStr = '{"event":';
        eventObjStr += eventStr;
        eventObjStr += '}';
        const event = JSON.parse(eventObjStr);
        console.log(event);
      }
    });

    return new Promise((resolve, reject) => {
      console.log('poo');
    });
    // return fs.readFile(pathToLog, 'utf8')
    //   .then((logStr: string) => {
    //     const log: HsmDevToolsModelState = JSON.parse(logStr);
    //     const hsmDevToolsModelState: HsmDevToolsModelState = log;
    //     for (const event of hsmDevToolsModelState.events) {
    //       dispatch(addHsmEvent(event));
    //     }
    //     console.log(getState());
    //     return Promise.resolve(hsmDevToolsModelState);
    //   });
  };
};
