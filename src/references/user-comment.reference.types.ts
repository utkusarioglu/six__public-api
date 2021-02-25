import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type UserCommentPipeline = {
  _request: DataNode<{
    userId: uuid;
    commentId: uuid;
  }>;

  _store: DataNode<UserCommentPipeline['_request']['Out']>;

  _insert: DataNode<
    UserCommentPipeline['_store']['Out'],
    {
      userId: 'user_id';
      commentId: 'comment_id';
    }
  >;

  _db: DataNode<
    UserCommentPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type UserCommentSelect = BuildSelect<UserCommentPipeline>['Select'];
