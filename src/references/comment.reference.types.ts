import { isoDate, uint, uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSubRequest } from '../helpers/request.types';
import { BuildSelect } from '../helpers/select.types';
import { PostSelect, WithPostId } from './post.reference.types';
import { WithUserId, UserSelect } from './user.reference.types';

export type CommentPipeline = {
  _request: DataNode<
    {
      parentId: uuid | null;
      body: string;
    },
    {},
    WithUserId & WithPostId
  >;

  _store: DataNode<CommentPipeline['_request']['Out']>;

  _insert: DataNode<
    CommentPipeline['_store']['Out'],
    {
      parentId: 'parent_id';
      userId: 'user_id';
      postId: 'post_id';
    },
    {},
    'user_id' | 'post_id'
  >;

  _db: DataNode<
    CommentPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
      created_at: isoDate;
      like_count: uint;
      dislike_count: uint;
    }
  >;
};

export type CommentSelect = BuildSelect<CommentPipeline>['Select'];

/**
 * The properties of comment that are sent to the client upon request
 */
export type CommentRes = BuildSelect<
  CommentPipeline,
  'id' | 'body' | 'created_at' | 'dislike_count' | 'like_count' | 'parent_id',
  {
    postId: PostSelect['id'];
    userId: UserSelect['id'];
    creatorUsername: UserSelect['username'];
    postSlug: PostSelect['postSlug'];
  },
  {
    created_at: 'createdAt';
    dislike_count: 'dislikeCount';
    like_count: 'likeCount';
    parent_id: 'parentId';
  }
>['Select'];

/**
 * The properties of comment that need to come from user input for a new comment
 * to be created
 */
export type CommentSaveSubRequest = BuildSubRequest<CommentPipeline>;

/**
 * MIXINS
 */

/**
 * Mixin for including comment id
 */
export type WithCommentId = {
  commentId: CommentSelect['id'];
};
