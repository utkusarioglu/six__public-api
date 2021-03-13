import type { CommentRes } from './comment.ref.types';
import type { VoteTypes } from './vote.ref.types';
import type { WithUserId } from '../refs/user.ref.types';
import type { WithCommunityId } from '../refs/community.ref.types';
import { isoDate, mimetype, uint, uuid } from '../helpers/alias.types';

export type PostSelect = {
  postSlug: string;
  id: uuid;
  postTitle: string;
  postBody: string;
  createdAt: isoDate;
  likeCount: uint;
  dislikeCount: uint;
  commentCount: uint;
  mediaImagePath: string;
};

export type PostSelectForCard = {
  postSlug: string;
  id: uuid;
  postTitle: string;
  postBody: string;
  createdAt: isoDate;
  likeCount: uint;
  dislikeCount: uint;
  commentCount: uint;
  creatorUsername: string;
  communityName: string;
  communitySlug: string;
  mediaImagePath: string;
  mediaType: mimetype;
  userVote: VoteTypes;
};

export type PostVoteResponse = Pick<
  PostSelectForCard,
  'id' | 'likeCount' | 'dislikeCount' | 'userVote'
>;

/**
 * Properties sent to the client when a comment associated with a certain post
 * is requested
 */
export type PostCommentRes = CommentRes & WithPostId;

/**
 * MIXINS
 */

/**
 * Mixin for including post slug
 */
export type WithPostSlug = {
  postSlug: PostSelect['postSlug'];
};

/**
 * Mixin for including post id
 */
export type WithPostId = {
  postId: PostSelect['id'];
};

export type PostPlRequestIn = {
  title: string;
  body: string;
} & {
  mediaImagePath: string;
} & WithUserId &
  WithCommunityId;
