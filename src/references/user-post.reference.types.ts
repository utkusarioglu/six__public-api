import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type UserPostPipeline = {
  _request: DataNode<{
    userId: uuid;
    postId: uuid;
  }>;

  _store: DataNode<UserPostPipeline['_request']['Out']>;

  _insert: DataNode<
    UserPostPipeline['_store']['Out'],
    {
      userId: 'user_id';
      postId: 'post_id';
    }
  >;

  _db: DataNode<
    UserPostPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type UserPostSelect = BuildSelect<UserPostPipeline>['Select'];
