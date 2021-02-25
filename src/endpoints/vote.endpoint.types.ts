import {
  CommentVoteSaveReq,
  PostVoteSaveReq,
} from '../references/vote.reference.types';
import { Post } from '../helpers/endpoint.types';
import { WithPostSlug } from '../references/post.reference.types';
import { WithCommentId } from '../references/comment.reference.types';
import type { WithRequestId } from '../helpers/mixin.types';

export interface VoteEndpoint {
  _post_vote: {
    _v1: Post<
      '/post/:postSlug/vote/:requestId',
      WithPostSlug & WithRequestId,
      PostVoteSaveReq,
      PostVoteSaveReq
    >;
  };

  _comment_vote: {
    _v1: Post<
      '/comment/:commentId/vote/:requestId',
      WithCommentId & WithRequestId,
      CommentVoteSaveReq,
      CommentVoteSaveReq
    >;
  };
}
