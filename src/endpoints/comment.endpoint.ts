import type { uuid } from '../helpers/helpers';
import { CommentSaveReq, CommentRes } from '../references/comment.reference';

/**
 * Saves a new comment
 *
 * @endpoint POST /api/<post id>/comment/new
 */
export type CommentSavePostReq = {
  id: uuid;
  req: CommentSaveReq;
};

/**
 * Retrieves one comment
 *
 * @endpoint GET /api/post/slug/<post slug>/comments
 */
export type CommentsGetRes = {
  id: uuid;
  res: CommentRes[];
};
