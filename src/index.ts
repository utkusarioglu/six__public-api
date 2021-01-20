/**
 * Response format sent by api/posts endpoint
 */
export type PostsResponse = Post[];

export interface Post {
  /** general properties */
  id: string; //uuid,
  createdAt: string; // iso time,

  /** Post related properties */
  postTitle: string;
  postBody: string;
  postSlug: string;

  /** Vote related properties */
  voteCount: number;

  /** comment related properties */
  commentCount: number;
  uniqueCommenterCount: number;

  /** community related properties */
  communitySlug: string;
  communityName: string;

  /** media related properties */
  mediaImagePath: string; // uri
  mediaType: 'image' | 'video' | 'none';
}
