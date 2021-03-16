import type {
  WithPostSlug,
  PostCommentRes,
  PostSelectForCard,
  WithPostId,
  PostVoteResponse,
} from '../refs/post.ref.types';
import type { Get, Post as POST } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';
import type { PostPlRequestIn } from '../refs/post.ref.types';
import type { PostVotePlRequestIn } from '../refs/post-vote.ref.types';

export interface PostEp {
  _single: {
    _v1: Get<
      '/post/slug/v1/:postSlug/:requestId',
      WithPostSlug & WithRequestId,
      PostSelectForCard
    >;
  };

  _list: {
    _v1: Get<'/posts/v1/:requestId', WithRequestId, PostSelectForCard[]>;
  };

  _create: {
    _v1: POST<
      '/post/create/v1/:requestId',
      WithRequestId,
      PostPlRequestIn,
      PostSelectForCard
    >;
  };

  _comments: {
    _v1: Get<
      '/post/:postId/comments/v1/:requestId',
      WithPostId & WithRequestId,
      PostCommentRes[]
    >;
  };

  _vote: {
    _v1: POST<
      '/post/vote/v1/:requestId',
      WithRequestId,
      PostVotePlRequestIn,
      PostVoteResponse
    >;
  };
}
