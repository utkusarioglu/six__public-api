/**
 * Computes the Final property of _request section of PipelineTypes type
 * hierarchy
 */
type PipelineTypesRequestFinal<
  Inputs extends PipelineTypesPrototype
> = Inputs['_request']['_input']['Unique'] &
  Inputs['_request']['_input']['Computed'] &
  Inputs['_request']['_input']['Foreign'];

/**
 * Computes Insert property from _store section of PipelineTypes type
 * hierarchy
 */
type PipelineTypesStoreInsertWithoutOmits<
  Inputs extends PipelineTypesPrototype
> = Omit<
  PipelineTypesStoreInsertWithOmits<Inputs>,
  keyof PipelineTypesOmitFromInsert<Inputs>
>;

/**
 * Computes insert properties while still including the omitted properties
 */
type PipelineTypesStoreInsertWithOmits<
  Inputs extends PipelineTypesPrototype
> = PipelineTypesRequestFinal<Inputs> & Inputs['_store']['_input']['Computed'];

/**
 * Computes the inputs after removing the omits
 */
type PipelineTypesInputAfterOmits<Inputs extends PipelineTypesPrototype> = Omit<
  PipelineTypesRequestFinal<Inputs>,
  keyof PipelineTypesOmitFromInsert<Inputs>
>;

/**
 * Computes Model property from PipelineTypes type hierarchy
 */
type PipelineTypesModel<
  Inputs extends PipelineTypesPrototype
> = PipelineTypesStoreInsertWithoutOmits<Inputs> & Inputs['_db']['DefaultTo'];

/**
 * Computes OmitFromInsert property from PipelineTypes type hierarchy
 */
type PipelineTypesOmitFromInsert<
  Inputs extends PipelineTypesPrototype
> = Inputs['_request']['_input']['Foreign'];

/**
 * Computes string literal version of the properties that are
 * supposed to be omitted from the insert
 */
type PipelineTypesOmitStringLiteral<
  Inputs extends PipelineTypesPrototype
> = keyof Inputs['_request']['_input']['Foreign'];

/**
 * Computes the FromConsumer property from PipelineTypes type hierarchy
 */
type PipelineTypesFromConsumer<
  Inputs extends PipelineTypesPrototype
> = Inputs['_request']['_input']['Unique'] &
  Inputs['_request']['_input']['Foreign'];

/**
 * Input prototype for PipelineTypes
 */
export interface PipelineTypesPrototype {
  _request: {
    _input: {
      /**
       * Types that only belong to the type in question
       */
      Unique: {};
      /**
       * Properties that come from other types, such as userId while
       * inserting a post
       */
      Foreign: {};
      /**
       * Properties computed for the consumer, such as the slug computed
       * from a post title
       */
      Computed: {};
    };
  };

  _store: {
    _input: {
      /**
       * Computations done at the store layer. This may be something related
       * to session id for example.
       */
      Computed: {};
    };
  };

  _db: {
    /**
     * Properties created by the default to settings of the db
     */
    DefaultTo: {};
  };
}

/**
 * Type hierarchy for data journey from request to persistence
 */

export type BuildPipeline<Inputs extends PipelineTypesPrototype> = {
  _request: {
    _input: {
      Unique: Inputs['_request']['_input']['Unique'];
      Foreign: Inputs['_request']['_input']['Foreign'];
      FromConsumer: PipelineTypesFromConsumer<Inputs>;
      Computed: Inputs['_request']['_input']['Computed'];
    };
    Final: PipelineTypesRequestFinal<Inputs>;
  };

  _store: {
    _input: {
      WithForeign: PipelineTypesRequestFinal<Inputs>;
      WithoutForeign: PipelineTypesInputAfterOmits<Inputs>;
      Computed: Inputs['_store']['_input']['Computed'];
    };
    _foreign: {
      Types: PipelineTypesOmitFromInsert<Inputs>;
      // StringLiteral: PipelineTypesOmitStringLiteral<Inputs>;
    };
    _insert: {
      WithForeign: PipelineTypesStoreInsertWithOmits<Inputs>;
      WithoutForeign: PipelineTypesStoreInsertWithoutOmits<Inputs>;
    };
  };

  _db: {
    DefaultTo: Inputs['_db']['DefaultTo'];
    Model: PipelineTypesModel<Inputs>;
  };
};

export type DefaultPipeline = BuildPipeline<PipelineTypesPrototype>;
