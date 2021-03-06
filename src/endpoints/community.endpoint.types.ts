import type {
  CommunitySaveReq,
  WithCommunitySlug,
  CommunityWithSubscriptionStatus,
  CommunityForCommunityPost,
} from '../refs/community.ref.types';
import type { PostSelectForCard } from '../refs/post.ref.types';
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
      '/community/list/v1/:requestId',
      WithRequestId,
      CommunityWithSubscriptionStatus[]
    >;
  };

  _create: {
    _v1: Post<
      '/community/create/v1/:requestId',
      WithRequestId,
      CommunitySaveReq,
      CommunityWithSubscriptionStatus
    >;
  };

  _community_posts: {
    _v1: Get<
      '/community/posts/v1/:communitySlug/:requestId',
      WithCommunitySlug & WithRequestId,
      PostSelectForCard[]
    >;
  };
}
