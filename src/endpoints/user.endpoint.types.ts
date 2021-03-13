import type {
  UserCommentRes,
  UserLoginSubRequest,
  UserSessionRes,
  VisitorSessionRes,
  WithUsername,
  UserLoginResSuccessful,
  WithUserId,
  UserPlRequestIn,
} from '../refs/user.ref.types';
import type { WithCommunityActionTypes } from '../refs/community.ref.types';
import type { Get, Post } from '../helpers/endpoint.types';
import type {
  WithCommunityId,
  CommunitySelect,
} from '../refs/community.ref.types';
import type { WithRequestId } from '../helpers/mixin.types';
import { uuid } from '../helpers/alias.types';

/**
 * User related types all together. Let's see if this works
 */
export interface UserEp {
  _signup: {
    _v1: Post<
      '/signup/v1/:requestId',
      WithRequestId,
      UserPlRequestIn,
      UserSessionRes
    >;
  };

  _login: {
    _v1: Post<
      '/login/v1/:requestId',
      WithRequestId,
      UserLoginSubRequest,
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
    _v1: Get<
      '/user/v1/:username/:requestId',
      WithRequestId,
      UserLoginResSuccessful
    >;
  };

  _user_comments: {
    _v1: Get<
      '/user/:username/comments/v1/:requestId',
      WithUsername & WithRequestId,
      UserCommentRes
    >;
  };

  _user_post_vote: {
    _v1: Get<
      '/user/:username/post-votes/v1/:requestId',
      WithUsername & WithRequestId,
      UserPostVoteSelect[]
    >;
  };

  _user_comment_vote: {
    _v1: Get<
      '/user/:username/comment-votes/v1/:requestId',
      WithUsername & WithRequestId,
      UserCommentVoteSelect[]
    >;
  };

  _user_community_subscription: {
    _id_list: {
      _v1: Get<
        '/user/:userId/subscriptions/id/v1/:requestId',
        WithUserId & WithRequestId,
        uuid[]
      >;
    };

    _ucs: {
      _v1: Post<
        '/user/ucs/:requestId',
        WithRequestId,
        WithUserId & WithCommunityId & WithCommunityActionTypes,
        WithUserId & WithCommunityId & WithCommunityActionTypes
      >;
    };
  };

  _user_community_creator: {
    _list: {
      _v1: Get<
        '/user/:username/community-creations/v1/:requestId',
        WithUsername & WithRequestId,
        CommunitySelect
      >;
    };
  };
}
