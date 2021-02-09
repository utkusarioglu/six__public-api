import {
  UserCommentVoteRes,
  UserRes,
  UserPostVoteRes,
  UserCommunitySubscriptionRes,
  UserCommunityCreatorRes,
  UserCommentRes,
  UserSave,
  UserLoginReq,
  UserLoginRes,
  UserCommunitySubscriptionCreateReq,
  UserCommunitySubscriptionCreateRes,
  UserCommunitySubscriptionRemoveReq,
  UserCommunitySubscriptionRemoveRes,
} from '../references/user.reference';
import { uuid } from '../helpers/helpers';

/**
 * Getting session information for the current user
 */
export type UserSessionGetRes = {
  id: uuid;
  res: UserRes;
};

/**
 * Used for receiving details of a user that isn't the logged in user
 *
 * @endpoint GET /api/user/<username>
 */
export type UserGetRes = {
  id: uuid;
  res: UserRes;
};

/**
 *
 * SIGNUP
 *
 */

/**
 * Creates a user
 *
 * @endpoint POST /api/signup
 */
export type UserSignupPostReq = {
  id: uuid;
  req: UserSave;
};

/**
 * Response to a UserSignupPostReq
 *
 * @endpoint POST /api/signup
 */
export type UserSignupPostRes = {
  id: uuid;
  res: any; // TODO
};

/**
 *
 * LOGIN
 *
 */

/**
 * Endpoint where the user logs in
 *
 * @endpoint POST /api/login
 */
export type UserLoginPostReq = {
  id: uuid;
  req: UserLoginReq;
};

/**
 * Response to a user login request
 *
 * @endpoint POST /api/login
 */
export type UserLoginPostRes = {
  id: uuid;
  res: UserLoginRes;
};

/**
 *
 * LOGOUT
 *
 */

/**
 * Receives logout requests
 *
 * @endpoint POST /api/logout
 */
export type UserLogoutPostReq = {};

/**
 * Response to a logout request
 */
export type UserLogoutPostRes = {
  id: 'some id';
  res: {
    loggedIn: boolean;
  };
};

/**
 *
 * OTHERS
 *
 */

/**
 * Comments of a single user
 *
 * @endpoint GET /api/user/<username>/comments
 */
export type UserCommentsGetRes = {
  id: uuid;
  res: UserCommentRes[];
};

/**
 * Post votes of a single user
 *
 * @endpoint GET /api/user/<username>/post-votes
 */
export type UserPostVotesGetRes = {
  id: uuid;
  res: UserPostVoteRes[];
};

/**
 * Comment votes of a single user
 *
 * @endpoint GET /api/user/<username>/comment-votes
 */
export type UserCommentVotesGetRes = {
  id: uuid;
  res: UserCommentVoteRes[];
};

/**
 *
 * COMMUNITY SUBSCRIPTION
 *
 */

/**
 * Subscriptions of a certain user to communities
 *
 * @endpint GET /api/user/<username>/subscriptions
 */
export type UserCommunitySubscriptionsGetRes = {
  id: uuid;
  res: UserCommunitySubscriptionRes[];
};

/**
 * Subscribes user to a new community
 *
 * @endpoint POST /api/user/<user id>/subscribe/<community id>
 */
export type UserCommunitySubscriptionCreatePostReq = {
  id: uuid;
  req: UserCommunitySubscriptionCreateReq;
};

/**
 * Responds to a user community subscription request
 *
 * @endpoint POST /api/user/<user id>/subscribe/<community id>
 */
export type UserCommunitySubscriptionCreatePostRes = {
  id: uuid;
  res: UserCommunitySubscriptionCreateRes;
};

/**
 * Unsubscribes user from a  community
 *
 * @endpoint POST /api/user/<user id>/unsubscribe/<community id>
 */
export type UserCommunitySubscriptionRemovePostReq = {
  id: uuid;
  req: UserCommunitySubscriptionRemoveReq;
};

/**
 * Response to a user unsubscribing from a community
 *
 * @endpoint POST /api/user/<user id>/unsubscribe/<community id>
 */
export type UserCommunitySubscriptionRemovePostRes = {
  id: uuid;
  res: UserCommunitySubscriptionRemoveRes;
};

/**
 *
 * COMMUNITY CREATION
 *
 */

/**
 * Communities that a certain user has created
 *
 * @endpoint GET /api/user/<username>/community-creations
 */
export type UserCommunityCreatorsGetRes = {
  id: uuid;
  res: UserCommunityCreatorRes[];
};
