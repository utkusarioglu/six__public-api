import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type PostCommentPipeline = {
  _request: DataNode<{
    postId: uuid;
    commentId: uuid;
  }>;

  _store: DataNode<PostCommentPipeline['_request']['Out']>;

  _insert: DataNode<
    PostCommentPipeline['_store']['Out'],
    {
      postId: 'post_id';
      commentId: 'comment_id';
    }
  >;

  _db: DataNode<
    PostCommentPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type PostCommentSelect = BuildSelect<PostCommentPipeline>['Select'];
