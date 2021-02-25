import { MapKeys } from './map-keys';

type RecordAny = Record<keyof any, any>;

type AfterJoins<
  In extends object,
  Translate extends Record<keyof Translate, keyof any>,
  Joins extends Record<string, any>
> = MapKeys<In, Translate> & Joins;

/**
 * Handles the data transformations for a single data node
 */
export type DataNode<
  /** Properties that go into a node */
  In extends RecordAny,
  /** Translations made to the property names */
  Translate extends Record<keyof Translate, keyof any> = {},
  /** Properties added to the object before it's sent to the next node */
  Joins extends RecordAny = {},
  /** Properties removed from the data object before it's sent to the next node */
  SplitLiterals extends keyof AfterJoins<In, Translate, Joins> = never
> = {
  In: In;
  Translated: MapKeys<In, Translate>;
  /** Includes the extra types */
  Joins: Joins;
  /** Union of types until now */
  AfterJoins: AfterJoins<In, Translate, Joins>;
  /** String literals of props to be removed */
  SplitLiterals: SplitLiterals;
  /** Split types */
  Splits: Pick<AfterJoins<In, Translate, Joins>, SplitLiterals>;
  /** Object after splits are removed */
  Out: Omit<AfterJoins<In, Translate, Joins>, SplitLiterals>;
};
