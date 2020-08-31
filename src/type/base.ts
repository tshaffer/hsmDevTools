/** @module Types:base */

/** @internal */
/** @private */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

import { HsmEvent } from './log';

/** @internal */
/** @private */
export interface HsmDevToolsModelState {
  events: HsmEvent[];
}
