import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type UserCommunitySubscriptionPipeline = {
  _request: DataNode<{
    userId: uuid;
    communityId: uuid;
  }>;

  _store: DataNode<UserCommunitySubscriptionPipeline['_request']['Out']>;

  _insert: DataNode<
    UserCommunitySubscriptionPipeline['_store']['Out'],
    {
      userId: 'user_id';
      communityId: 'community_id';
    }
  >;

  _db: DataNode<
    UserCommunitySubscriptionPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type UserCommunitySubscriptionSelect = BuildSelect<
  UserCommunitySubscriptionPipeline,
  'user_id' | 'community_id' | 'id',
  {},
  { user_id: 'userId'; community_id: 'communityId' }
>['Select'];
