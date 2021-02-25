import { mimetype, uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type UserContentPipeline = {
  _request: DataNode<{
    filename: string;
    type: mimetype;
  }>;

  _store: DataNode<UserContentPipeline['_request']['Out']>;

  _insert: DataNode<UserContentPipeline['_store']['Out']>;

  _db: DataNode<
    UserContentPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type UserContentSelect = BuildSelect<UserContentPipeline>['Select'];
