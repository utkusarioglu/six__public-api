import {
  CommunitySelect,
  CommunityPostRes,
  CommunitySaveReq,
  WithCommunitySlug,
} from '../references/community.reference.types';
import { Get, Post } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';

export interface CommunityEndpoint {
  _single: {
    _v1: Get<
      '/community/:communitySlug/:requestId',
      WithCommunitySlug & WithRequestId,
      CommunitySelect
    >;
  };

  _list: {
    _v1: Get<'/communities/:requestId', WithRequestId, CommunitySelect[]>;
  };

  _community_post: {
    _list: {
      _v1: Get<
        '/community/:communitySlug/post/:requestId',
        WithCommunitySlug & WithRequestId,
        CommunityPostRes[]
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
