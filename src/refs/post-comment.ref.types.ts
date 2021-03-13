import type { uuid } from '../helpers/alias.types';

export type PostCommentPlRequestIn = {
  postId: uuid;
  commentId: uuid;
};
