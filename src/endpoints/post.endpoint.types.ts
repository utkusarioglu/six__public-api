import {
  PostPipeline,
  WithPostSlug,
  PostCommentRes,
  PostSelect,
  PostSelectForCard,
  WithPostId,
} from '../references/post.reference.types';
import { Get, Post as POST } from '../helpers/endpoint.types';
import type { WithRequestId } from '../helpers/mixin.types';

export interface PostEndpoint {
  _single: {
    _v1: Get<
      '/post/slug/:postSlug/:requestId',
      WithPostSlug & WithRequestId,
      PostSelectForCard
    >;
  };

  _list: {
    _v1: Get<'/posts/:requestId', WithRequestId, PostSelectForCard[]>;
  };

  _create: {
    _v1: POST<
      '/post/:requestId',
      WithRequestId,
      PostPipeline['_request']['In'],
      PostSelect
    >;
  };

  _comments: {
    _v1: Get<
      '/post/:postId/comments/:requestId',
      WithPostId & WithRequestId,
      PostCommentRes[]
    >;
  };
}
