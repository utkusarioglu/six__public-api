import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type VisitorCommunitySubscriptionPipeline = {
  _request: DataNode<{
    communityId: uuid;
  }>;

  _store: DataNode<VisitorCommunitySubscriptionPipeline['_request']['Out']>;

  _insert: DataNode<
    VisitorCommunitySubscriptionPipeline['_store']['Out'],
    {
      communityId: 'community_id';
    }
  >;

  _db: DataNode<
    VisitorCommunitySubscriptionPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type VisitorCommunitySubscriptionSelect = BuildSelect<VisitorCommunitySubscriptionPipeline>['Select'];
