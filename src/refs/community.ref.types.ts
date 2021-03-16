import { isoDate, uint, uuid } from '../helpers/alias.types';

export type CommunitySelect = {
  description: string;
  name: string;
  slug: string;
  id: uuid;
  createdAt: isoDate;
  postCount: uint;
  subscriberCount: uint;
};

export type CommunitySaveReq = {
  description: string;
  name: string;
  slug: string;
};

/**
 * Action types a user can take against a community
 */
export type CommunityActionTypes = 'subscribe' | 'unsubscribe';

export type CommunityWithSubscriptionStatus = {
  description: string;
  name: string;
  slug: string;
  id: uuid;
  createdAt: isoDate;
  postCount: uint;
  subscriberCount: uint;
  ucs: boolean;
};

export type CommunityForCommunityPost = {
  id: uuid;
  slug: string;
  description: string;
  name: string;
  createdAt: isoDate;
  postCount: uint;
  subscriberCount: uint;
};

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
