import type { uuid } from '../helpers/alias.types';

export type WithHasUcs = {
  ucs: boolean;
};

export type UserCommunitySubscriptionPlRequestIn = {
  userId: uuid;
  communityId: uuid;
};
