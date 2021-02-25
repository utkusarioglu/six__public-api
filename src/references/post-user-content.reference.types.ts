import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type PostUserContentPipeline = {
  _request: DataNode<{
    postId: uuid;
    userContentId: uuid;
  }>;

  _store: DataNode<PostUserContentPipeline['_request']['Out']>;

  _insert: DataNode<
    PostUserContentPipeline['_store']['Out'],
    {
      postId: 'post_id';
      userContentId: 'user_content_id';
    }
  >;

  _db: DataNode<
    PostUserContentPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type PostUserContentSelect = BuildSelect<PostUserContentPipeline>['Select'];
