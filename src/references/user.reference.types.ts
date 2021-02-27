import type { CommentRes, WithCommentId } from './comment.reference.types';
import type { CommunitySelect } from './community.reference.types';
import type { VoteSelect } from './vote.reference.types';
import { BuildSelect } from '../helpers/select.types';
import { WithCommunityId } from './community.reference.types';
import { WithPostId } from './post.reference.types';
import { BuildSubRequest } from '../helpers/request.types';
import { DataNode } from '../helpers/data-node';
import { uint, uuid } from '../helpers/alias.types';

export type UserPipeline = {
  _request: DataNode<{
    username: string;
    age: uint;
    password: string;
    email: string;
  }>;

  _store: DataNode<UserPipeline['_request']['Out']>;

  _insert: DataNode<UserPipeline['_store']['Out']>;

  _db: DataNode<
    UserPipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type UserSelect = BuildSelect<UserPipeline>['Select'];

/**
 * Properties used for user session
 */
export type UserSessionSelect = BuildSelect<
  UserPipeline,
  'username' | 'id' | 'age' | 'email',
  {
    loggedIn: boolean;
  }
>['Select'];

/**
 * LOGIN
 */

/**
 * Login request required fields
 */
export type UserLoginSubRequest = BuildSubRequest<
  UserPipeline,
  'email' | 'password'
>;

/**
 * SIGNUP
 */

/**
 * Properties required for a signup request
 */
export type UserSignupReq = BuildSubRequest<
  UserPipeline,
  'username' | 'password' | 'age' | 'email'
>;

/**
 * SESSION
 */

/**
 * Response to a login request
 */
export type UserSessionRes = UserLoginResSuccessful | VisitorSessionRes;

/**
 * Response if the user login response is a success
 */
export type UserLoginResSuccessful = BuildSelect<
  UserPipeline,
  'id' | 'username' | 'age' | 'email',
  {
    state: 'logged-in';
  }
>['Select'];

/**
 * Tells that the session is now a visitor session
 */
export type VisitorSessionRes = {
  state: 'visitor';
};

/**
 * USER DETAILS
 */

/**
 * Maximal size of the user object that is sent to the client
 */
export type UserDetailsRes = BuildSelect<
  UserPipeline,
  'id' | 'username' | 'age' | 'email',
  {
    state: 'logged-in';
  }
>['Select'];

/**
 * ASSOCIATIONS
 */

/**
 * Votes cast by a certain user for certain posts
 */
export type UserPostVoteRes = VoteSelect & WithPostId;

/**
 * Votes cast by a certain user for certain comments
 */
export type UserCommentVoteRes = VoteSelect & WithCommentId;

/**
 * Community subscriptions of a user
 */
type UserCommunitySubscriptionRes = CommunitySelect & WithUserId;

/**
 * Body required for creating a new community subscription
 */
type UserCommunitySubscriptionCreateReq = {};

type UserCommunitySubscriptionCreateReqParams = WithUserId & WithCommunityId;

/**
 * Response to a community subscription request
 */
type UserCommunitySubscriptionCreateRes = WithUserId & WithCommunityId;

/**
 * Body required for removing a community subscription;
 */
type UserCommunitySubscriptionRemoveReq = {};

/**
 * response to a community subscription removal
 */
type UserCommunitySubscriptionRemoveRes = WithUserId & WithCommunityId;

/**
 * Community creation of a user
 *
 * @remark
 * References the the record of creation of a certain community
 * by a user
 */
type UserCommunityCreatorRes = CommunitySelect & WithUserId;

/**
 * Comment made by a particular user
 */
export type UserCommentRes = CommentRes & WithUserId;

/**
 * MIXINS
 */

/**
 * Mixin for including username in type
 */
export type WithUsername = {
  username: UserSelect['username'];
};

/**
 * Mixin for including userId in type
 */
export type WithUserId = {
  userId: UserSelect['id'];
};
