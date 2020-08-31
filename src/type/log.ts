/** @module Types:log */

/** @internal */
/** @private */
export interface HsmDevToolsEventsState {
  events: HsmEvent[];
}

export interface HsmEvent {
  time: number;
  event: HsmEventType;
  hState: HState;
  hsmStateBefore: any;
  hsmStateAfter: any;
}

export interface LUT { [key: string]: any; }

export interface HsmEventType {
  EventType: string;
}

export class HStateType {
  static Top = 'Top';
  static Player = 'Player';
  static Playing = 'Playing';
  static Waiting = 'Waiting';
  static Image = 'Image';
  static Mrss = 'Mrss';
  static Video = 'Video';
  static SuperState = 'SuperState';
}
Object.freeze(HStateType);

export interface HState {
  id: string;
  type: HStateType;
  hsmId: string;
  superStateId: string;
  name: string;
  // data??
}

export interface BsPpBaseObject {
  id: string;
}

export interface BsPpMap<T extends BsPpBaseObject> {
  [id: string]: T;    // really '[id:BsDmId]: T;' -- but Typescript doesn't like that, even though BsDmId = string
}

export class HsmType {
  static Player = 'Player';
  static VideoOrImages = 'VideoOrImages';
}
Object.freeze(HsmType);

export type HsmProperties = ZoneHsmProperties | MediaZoneHsmProperties | {};

export interface ZoneHsmProperties {
  zoneId: string;
  x: number;
  y: number;
  width: number;
  height: number;

  initialMediaStateId: string;
}

export interface MediaZoneHsmProperties extends ZoneHsmProperties {
  mediaStateIdToHState: LUT;
}


export interface Hsm {
  id: string;
  name: string;
  type: HsmType;
  topStateId: string;
  activeStateId: string | null;
  initialized: boolean;
  properties: HsmProperties;
}

export type HsmMap = BsPpMap<Hsm>;
export type HStateMap = BsPpMap<HState>;

export interface HsmState {
  hsmById: HsmMap;
  hStateById: HStateMap;
  hsmEventQueue: HsmEventType[];
}

