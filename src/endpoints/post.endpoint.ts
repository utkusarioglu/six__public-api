import {
  PostRes,
  PostCommentRes,
  PostSave,
} from '../references/post.reference';
import { uuid } from '../helpers/helpers';

/**
 * Single post
 *
 * @endpoint GET /api/post/<post id>
 */
export type PostGetRes = {
  id: uuid;
  res: PostRes;
};

/**
 * List of all the available posts
 *
 * @endpoint GET /api/posts/
 */
export type PostsGetRes = {
  id: uuid;
  res: PostRes[];
};

/**
 * All the comments on a single post
 *
 * @endpoint GET /api/post/<post id>/
 */
export type PostCommentsGetRes = {
  id: uuid;
  res: PostCommentRes[];
};

/**
 * Accepts a new post
 *
 * @endpoint POST /api/post
 */
export type PostPostReq = {
  id: uuid;
  req: PostSave;
};
