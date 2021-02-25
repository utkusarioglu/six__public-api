import { PipelineTypesPrototype, BuildPipeline } from './pipeline.types';
import { MapKeys } from '../helpers/map-keys';

/**
 * Prototype for SelectTypes input
 */
type BuildSelectPrototype = {
  // ! any
  // This was the only way that ValuesType did not cause issues
  Select: any;
  Computed?: {};
  Foreign?: {};
};

/**
 * Type hierarchy for creating types for data journey from persistence to client
 */

type BuildSelect_old<
  Pipeline extends PipelineTypesPrototype,
  Inputs extends BuildSelectPrototype
> = {
  /**
   * Properties that will be selected from the model
   */
  Select: SelectTypesInclude<Pipeline, Inputs>;

  /**
   * Properties auto created after the selection, this may be something
   * like the retrieval time
   */
  Computed: Inputs['Computed'];

  /**
   * Auto and Include together
   */
  SelectAndComputed: SelectTypesInclude<Pipeline, Inputs> & Inputs['Computed'];

  /**
   * Properties omitted from being returned to the user. As an example
   * may be the password field for the user store
   */
  Exclude: Omit<
    BuildPipeline<Pipeline>['_db']['Model'],
    keyof (Inputs['Select'] & Inputs['Computed'])
  >;

  /**
   * Properties added to the return from some other data sources that are
   * not auto-created
   */
  Foreign: Inputs['Foreign'];

  /**
   * Returns the list of all the selected properties
   */
  SelectAll: SelectTypesInclude<Pipeline, Inputs> &
    Inputs['Computed'] &
    Inputs['Foreign'];

  /**
   * Easy access to the database model with TS naming convention.
   * Note that this may not equal the return of the select type. This
   * represents columns stored in the database for the given pipeline
   */
  Model: BuildPipeline<Pipeline>['_db']['Model'];
};

/**
 * Computes types for the Include property of {@link SelectTypes}
 */
type SelectTypesInclude<
  Pipeline extends PipelineTypesPrototype,
  Inputs extends { Select: keyof BuildPipeline<Pipeline>['_db']['Model'] }
> = Pick<BuildPipeline<Pipeline>['_db']['Model'], Inputs['Select']>;

/**
 * Type hierarchy for creating types for data journey from persistence to client
 */

export type BuildSelect<
  Pipeline extends { _db: { Out: Record<string, any> } },
  Native extends keyof Pipeline['_db']['Out'] = keyof Pipeline['_db']['Out'],
  Foreign extends {} = {},
  Rename extends Record<keyof Rename, keyof any> = {}
> = {
  /**
   * Properties that will be selected from the model
   */
  Native: Pick<Pipeline['_db']['Out'], Native>;

  /**
   * Properties added to the return from some other data sources that are
   * not auto-created
   */
  Foreign: Foreign;

  /**
   * Returns the list of all the selected properties
   */
  Select: MapKeys<Pick<Pipeline['_db']['Out'], Native> & Foreign, Rename>;
};
