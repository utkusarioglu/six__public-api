import type { Post, Get } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';
import {
  CommentSaveSubRequest,
  WithCommentId,
  CommentRes,
} from '../references/comment.reference.types';

export interface CommentEndpoint {
  _save: {
    _v1: Post<
      '/comment/save/:requestId',
      WithRequestId,
      CommentSaveSubRequest['Request'],
      CommentRes
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
