import type { Post, Get } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';
import type {
  CommentPlRequestIn,
  WithCommentId,
  CommentRes,
} from '../refs/comment.ref.types';
import type { CommentVotePlRequestIn } from '../refs/comment-vote.ref.types';

export interface CommentEp {
  _save: {
    _v1: Post<
      '/comment/save/v1/:requestId',
      WithRequestId,
      CommentPlRequestIn,
      CommentRes
    >;
  };

  _single: {
    _v1: Get<
      '/comment/v1/:commentId/:requestId',
      WithCommentId & WithRequestId,
      CommentRes
    >;
  };

  _vote: {
    _give: {
      _v1: Post<
        '/vote/comment/give/v1/:requestId',
        WithRequestId,
        CommentVotePlRequestIn,
        CommentVotePlRequestIn
      >;
    };
  };
}
