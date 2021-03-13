import type { WithPostId } from '../refs/post.ref.types';
import type { WithUserId } from '../refs/user.ref.types';
import type { uint, uuid } from '../helpers/alias.types';

export type CommentRes = {
  id: uuid;
  body: string;
  createdAt: string;
  likeCount: uint;
  dislikeCount: uint;
  postSlug: string;
  parentId: uuid | null;
  postId: uuid;
  userId: uuid;
  creatorUsername: string;
  state: 'is-submitting' | 'submitted' | 'is-deleting' | 'deleted';
};

export type CommentPlRequestIn = {
  parentId: uuid | null;
  body: string;
} & WithUserId &
  WithPostId;

/**
 * MIXINS
 */

/**
 * Mixin for including comment id
 */
export type WithCommentId = {
  commentId: uuid;
};
