import type {
  CommunitySaveReq,
  WithCommunitySlug,
  CommunityWithSubscriptionStatus,
  CommunityForCommunityPost,
} from '../refs/community.ref.types';
import type { Get, Post } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';

export interface CommunityEp {
  _single: {
    _v1: Get<
      '/community/v1/:communitySlug/:requestId',
      WithCommunitySlug & WithRequestId,
      CommunityWithSubscriptionStatus
    >;
  };

  _list: {
    _v1: Get<
      '/communities/v1/:requestId',
      WithRequestId,
      CommunityWithSubscriptionStatus[]
    >;
  };

  _create: {
    _v1: Post<
      '/community/create/v1/:requestId',
      WithRequestId,
      CommunitySaveReq,
      CommunitySaveReq
    >;
  };

  _community_post: {
    _list: {
      _v1: Get<
        '/community/v1/:communitySlug/post/:requestId',
        WithCommunitySlug & WithRequestId,
        CommunityForCommunityPost[]
      >;
    };
  };
}
