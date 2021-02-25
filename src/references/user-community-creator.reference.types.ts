import type { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import type { BuildSelect } from '../helpers/select.types';

export type UserCommunityCreatorPipeline = {
  _request: DataNode<{
    userId: uuid;
    communityId: uuid;
  }>;

  _store: DataNode<UserCommunityCreatorPipeline['_request']['Out']>;

  _insert: DataNode<
    UserCommunityCreatorPipeline['_store']['Out'],
    {
      userId: 'user_id';
      communityId: 'community_id';
    }
  >;

  _db: DataNode<
    UserCommunityCreatorPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type UserCommunityCreatorSelect = BuildSelect<UserCommunityCreatorPipeline>['Select'];
