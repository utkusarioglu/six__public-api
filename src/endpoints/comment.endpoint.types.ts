import type { Post, Get } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';
import {
  CommentSaveSubRequest,
  WithCommentId,
  CommentRes,
} from '../references/comment.reference.types';
import { WithPostSlug } from '../references/post.reference.types';

export interface CommentEndpoint {
  _save: {
    _v1: Post<
      '/post/:postSlug/comment/create/:requestId',
      WithPostSlug & WithRequestId,
      CommentSaveSubRequest['Request'],
      CommentSaveSubRequest['Response']
    >;
  };

  _single: {
    _v1: Get<
      '/comment/:commentId/:requestId',
      WithCommentId & WithRequestId,
      CommentRes
    >;
  };
}
