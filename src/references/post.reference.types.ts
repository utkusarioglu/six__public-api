import type { CommentRes } from './comment.reference.types';
import { BuildSelect } from '../helpers/select.types';
import { WithUserId } from './user.reference.types';
import { WithCommunityId } from './community.reference.types';
import { UserSelect } from './user.reference.types';
import { CommunitySelect } from './community.reference.types';
import { isoDate, uint, uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { UserContentSelect } from './user-content.reference.types';

export type PostPipeline = {
  _request: DataNode<
    {
      title: string;
      body: string;
    },
    {},
    WithUserId &
      WithCommunityId & {
        mediaImagePath: string;
      }
  >;

  _store: DataNode<PostPipeline['_request']['Out']>;

  _insert: DataNode<
    PostPipeline['_store']['Out'],
    {
      mediaImagePath: 'cover_image_path';
      userId: 'user_id';
      communityId: 'community_id';
    },
    {
      type: string;
      slug: string;
    },
    'user_id' | 'community_id' | 'cover_image_path' | 'type'
  >;

  _db: DataNode<
    PostPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
      created_at: isoDate;
      like_count: uint;
      dislike_count: uint;
      comment_count: uint;
    }
  >;
};

/**
 * Properties for single post response
 */
export type PostSelect = BuildSelect<
  PostPipeline,
  | 'id'
  | 'title'
  | 'body'
  | 'slug'
  | 'created_at'
  | 'like_count'
  | 'dislike_count'
  | 'comment_count',
  {
    mediaImagePath: UserContentSelect['filename'];
  },
  {
    title: 'postTitle';
    body: 'postBody';
    slug: 'postSlug';
    created_at: 'createdAt';
    like_count: 'likeCount';
    dislike_count: 'dislikeCount';
    comment_count: 'commentCount';
  }
>['Select'];

export type PostSelectForCard = BuildSelect<
  PostPipeline,
  | 'id'
  | 'title'
  | 'slug'
  | 'body'
  | 'created_at'
  | 'like_count'
  | 'dislike_count'
  | 'comment_count',
  {
    creatorUsername: UserSelect['username'];
    communityName: CommunitySelect['name'];
    communitySlug: CommunitySelect['slug'];
    mediaImagePath: UserContentSelect['filename'];
    mediaType: UserContentSelect['type'];
  },
  {
    title: 'postTitle';
    body: 'postBody';
    slug: 'postSlug';
    created_at: 'createdAt';
    like_count: 'likeCount';
    dislike_count: 'dislikeCount';
    comment_count: 'commentCount';
  }
>['Select'];

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
