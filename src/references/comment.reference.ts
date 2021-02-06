import type { PostGetRes } from '../endpoints/post.endpoint';
import { UserGetRes } from '../endpoints/user.endpoint';
import { uuid } from '../helpers/helpers';

/**
 * Complete comment object
 */
export interface Comment {
  id: string; // uuid
  parentId: uuid | null; // uuid
  createdAt: string; // iso date
  body: string;
  likeCount: number; // uint
  dislikeCount: number; // uint
  postSlug: string; //uuid
  creatorUsername: string;
}

/**
 * Properties of comment object that are filled by the sql defaults, increments
 */
export type CommentSqlAutoSave = Pick<
  Comment,
  'id' | 'createdAt' | 'likeCount' | 'dislikeCount'
>;

/**
 * The properties of comment that need to come from user input for a new comment
 * to be created
 */
export type CommentSave = Omit<Comment, keyof CommentSqlAutoSave>;

/**
 * The properties of comment that are sent to the client upon request
 */
export type CommentRes = Comment;

/**
 * Shape of a comment sent to the server for insertion
 */
export type CommentSaveReq = {
  // gets the post id from prior request for the post content,
  // which is sent through PostGetRes
  postId: PostGetRes['id'];
  userId: UserGetRes['id'];
} & CommentSave;
