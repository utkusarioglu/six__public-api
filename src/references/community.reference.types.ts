import { isoDate, uint, uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';
import type { WithNullableUCSId } from './user-community-subscription.reference.types';

export type CommunityPipeline = {
  _request: DataNode<{
    description: string;
    name: string;
    slug: string; // url-safe string
  }>;

  _store: DataNode<CommunityPipeline['_request']['Out']>;

  _insert: DataNode<CommunityPipeline['_store']['Out']>;

  _db: DataNode<
    CommunityPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
      created_at: isoDate;
      post_count: uint;
      subscriber_count: uint;
    }
  >;
};

/**
 * Properties of community that are sent to the client upon request
 */
export type CommunitySelect = BuildSelect<
  CommunityPipeline,
  | 'description'
  | 'name'
  | 'slug'
  | 'id'
  | 'created_at'
  | 'post_count'
  | 'subscriber_count',
  {},
  {
    created_at: 'createdAt';
    post_count: 'postCount';
    subscriber_count: 'subscriberCount';
  }
>['Select'];

/**
 * Properties of community that are required to be submitted by the user
 * to create a new community
 */
export type CommunitySaveReq = CommunityPipeline['_request']['In'];

/**
 * Action types a user can take against a community
 */
export type CommunityActionTypes = 'subscribe' | 'unsubscribe';

/**
 * Includes ucsId, which is the subscription id for the community, if one
 * exists
 */
export type CommunityWithSubscriptionStatus = BuildSelect<
  CommunityPipeline,
  | 'description'
  | 'name'
  | 'slug'
  | 'id'
  | 'created_at'
  | 'post_count'
  | 'subscriber_count',
  WithNullableUCSId,
  {
    created_at: 'createdAt';
    post_count: 'postCount';
    subscriber_count: 'subscriberCount';
  }
>['Select'];

/**
 * Returns JS naming convention properties for posts of a single
 * community. Does not include ucsId
 */
export type CommunityForCommunityPost = BuildSelect<
  CommunityPipeline,
  | 'description'
  | 'name'
  | 'slug'
  | 'id'
  | 'created_at'
  | 'post_count'
  | 'subscriber_count',
  {},
  {
    created_at: 'createdAt';
    post_count: 'postCount';
    subscriber_count: 'subscriberCount';
  }
>['Select'];

/**
 * MIXINS
 */

/**
 * Mixin for including community action types
 */
export type WithCommunityActionTypes = {
  actionType: CommunityActionTypes;
};

/**
 * Mixin for including community id
 */
export type WithCommunityId = {
  communityId: CommunitySelect['id'];
};

/**
 * Mixin for including community slug
 */
export type WithCommunitySlug = {
  communitySlug: CommunitySelect['slug'];
};
