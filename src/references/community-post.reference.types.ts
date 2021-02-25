import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type CommunityPostPipeline = {
  _request: DataNode<{
    postId: uuid;
    communityId: uuid;
  }>;

  _store: DataNode<CommunityPostPipeline['_request']['Out']>;

  _insert: DataNode<
    CommunityPostPipeline['_store']['Out'],
    {
      postId: 'post_id';
      communityId: 'community_id';
    }
  >;

  _db: DataNode<
    CommunityPostPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type CommunityPostSelect = BuildSelect<CommunityPostPipeline>['Select'];
