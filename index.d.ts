// Generated by dts-bundle v0.7.3

/** @module Types:index */

/** @internal */
export interface TemplateProps {
    color: number;
}
export const Template: import("react-redux").ConnectedComponent<() => JSX.Element, Pick<unknown, never>>;

/** @module Types:base */
/** @private */
export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
/** @private */
export interface BsUiModelState {
    template: BsUiModelTemplateState;
}
/** @private */
export const createModel: (template: BsUiModelTemplateState) => BsUiModelState;

/** @module Types:template */
/** @private */
export interface BsUiModelTemplateState {
    readonly property: BsUiModelTemplatePropertyState;
}
/** @private */
export const createTemplate: (property: BsUiModelTemplatePropertyState) => BsUiModelTemplateState;

/** @private */
export interface BsUiModelTemplatePropertyColorState {
    a: number;
    r: number;
    g: number;
    b: number;
}
/** @private */
export interface BsUiModelTemplatePropertyState {
    color: BsUiModelTemplatePropertyColorState;
}
/** @private */
export const createTemplateProperty: (color: BsUiModelTemplatePropertyColorState) => BsUiModelTemplatePropertyState;
/** @private */
export const createBsColor: (r: number, g: number, b: number, a: number) => BsUiModelTemplatePropertyColorState;

export enum BsUiErrorType {
    unknownError = 0,
    unexpectedError = 1,
    invalidParameters = 2,
    invalidOperation = 3,
    apiError = 4,
    invalidModel = 5
}
export class BsUiError extends Error {
    name: string;
    type: BsUiErrorType;
    constructor(type: BsUiErrorType, reason?: string);
}
export function isBsUiError(error: Error): error is BsUiError;

