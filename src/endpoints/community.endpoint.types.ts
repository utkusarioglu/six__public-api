import {
  CommunitySelect,
  CommunitySaveReq,
  WithCommunitySlug,
  CommunityWithSubscriptionStatus,
  CommunityForCommunityPost,
} from '../references/community.reference.types';
import { Get, Post } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';

export interface CommunityEndpoint {
  _single: {
    _v1: Get<
      '/community/:communitySlug/:requestId',
      WithCommunitySlug & WithRequestId,
      CommunityWithSubscriptionStatus
    >;
  };

  _list: {
    _v1: Get<
      '/communities/:requestId',
      WithRequestId,
      CommunityWithSubscriptionStatus[]
    >;
  };

  _community_post: {
    _list: {
      _v1: Get<
        '/community/:communitySlug/post/:requestId',
        WithCommunitySlug & WithRequestId,
        CommunityForCommunityPost[]
      >;
    };

    _create: {
      _v1: Post<
        '/community/create/:requestId',
        WithRequestId,
        CommunitySaveReq,
        CommunitySaveReq
      >;
    };
  };
}
