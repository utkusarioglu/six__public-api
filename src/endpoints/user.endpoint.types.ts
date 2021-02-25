import {
  UserCommentVoteRes,
  UserDetailsRes,
  UserPostVoteRes,
  UserCommentRes,
  UserLoginSubRequest,
  UserSessionRes,
  VisitorSessionRes,
  WithUsername,
  UserSignupReq,
} from '../references/user.reference.types';
import { WithCommunityActionTypes } from '../references/community.reference.types';
import { Get, Post } from '../helpers/endpoint.types';
import { WithCommunityId } from '../references/community.reference.types';
import type { WithRequestId } from '../helpers/mixin.types';

/**
 * User related types all together. Let's see if this works
 */
export interface UserEndpoint {
  _signup: {
    _v1: Post<
      '/signup/v1/:requestId',
      WithRequestId,
      UserSignupReq['Request'],
      UserSessionRes
    >;
  };

  _login: {
    _v1: Post<
      '/login/v1/:requestId',
      WithRequestId,
      UserLoginSubRequest['Request'],
      UserSessionRes
    >;
  };

  _logout: {
    _v1: Post<'/logout/v1/:requestId', WithRequestId, {}, VisitorSessionRes>;
  };

  _session: {
    _v1: Get<'/session/v1/:requestId', WithRequestId, UserSessionRes>;
  };

  _details: {
    _v1: Get<'/user/v1/:username/:requestId', WithRequestId, UserDetailsRes>;
  };

  _user_comments: {
    _v1: Get<
      '/user/:username/comments/:requestId',
      WithUsername & WithRequestId,
      UserCommentRes
    >;
  };

  _user_post_vote: {
    _v1: Get<
      '/user/:username/post-votes/:requestId',
      WithUsername & WithRequestId,
      UserPostVoteRes[]
    >;
  };

  _user_comment_vote: {
    _v1: Get<
      '/user/:username/comment-votes/:requestId',
      WithUsername & WithRequestId,
      UserCommentVoteRes[]
    >;
  };

  _user_community_subscription: {
    _list: {
      _v1: Get<
        '/user/:username/subscriptions/:requestId',
        WithUsername & WithRequestId,
        UserCommunitySubscriptionRes[]
      >;
    };
    _alter: {
      _v1: Post<
        'user/:username/:actionType/:communityId/:requestId',
        WithUsername &
          WithCommunityId &
          WithCommunityActionTypes &
          WithRequestId,
        {},
        UserCommunitySubscriptionCreateRes
      >;
    };
  };

  _user_community_creator: {
    _list: {
      _v1: Get<
        '/user/:username/community-creations/:requestId',
        WithUsername & WithRequestId,
        UserCommunityCreatorRes[]
      >;
    };
  };
}
