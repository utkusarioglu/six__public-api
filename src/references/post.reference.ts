import { CommunityGetRes } from '../endpoints/community.endpoint';
import { UserGetRes } from '../endpoints/user.endpoint';
import type { CommentRes } from './comment.reference';

/**
 * Complete post object
 */
interface Post {
  /** general properties */
  id: string; //uuid,
  createdAt: string; // iso time,

  /** Post related properties */
  postTitle: string;
  postBody: string;
  postSlug: string;

  /** Vote related properties */
  likeCount: number;
  dislikeCount: number;

  /** comment related properties */
  commentCount: number;
  uniqueCommenterCount: number;

  /** community related properties */
  communitySlug: string;
  communityName: string;

  /** Post creator related */
  postCreatorUsername: string;

  /** media related properties */
  mediaImagePath: string; // uri
  mediaType: 'image' | 'video' | 'none';
}

/**
 * Properties of Post object that are auto-filled by the sql engine during
 * post creation
 */
export type PostSqlAutoSave = Pick<
  Post,
  | 'id'
  | 'createdAt'
  | 'likeCount'
  | 'dislikeCount'
  | 'commentCount'
  | 'uniqueCommenterCount'
>;

/**
 * Properties of Post object that are auto-filled by the store before the
 * sql command is issued
 */
export type PostStoreAutoSave = Pick<Post, 'postSlug'>;

/**
 * Properties of Post that need to come from the user input for a new post to
 * be saved
 */
export type PostSave = Omit<
  Post,
  keyof PostSqlAutoSave | keyof PostStoreAutoSave
> & {
  userId: UserGetRes['res']['id'];
  communityId: CommunityGetRes['res']['id'];
};

/**
 * The maximal size of the Post object that is sent to the client
 */
export type PostRes = Post;

/**
 * Properties sent to the client when a comment associated with a certain post
 * is requested
 */
export interface PostCommentRes extends CommentRes {
  postId: Post['id'];
}
