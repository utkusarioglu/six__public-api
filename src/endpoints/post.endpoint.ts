import {
  PostRes,
  PostCommentRes,
  PostSave,
} from '../references/post.reference';
import { uuid } from '../helpers/helpers';

/**
 *
 * POST
 *
 */

/**
 * Get single post by its slug
 *
 * @endpoint GET /api/post/slug/<postSlug>
 */
export type PostGetRes = {
  id: uuid;
  res: PostRes;
};

/**
 *
 * POSTS
 *
 */

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
 * @endpoint GET /api/post/comments/<post id>/
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
export type PostCreatePostReq = {
  id: uuid;
  req: PostSave;
};
