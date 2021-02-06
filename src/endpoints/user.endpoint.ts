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
} from '../references/user.reference';
import { uuid } from '../helpers/helpers';

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
 * Subscriptions of a certain user to communities
 *
 * @endpint GET /api/user/<username>/subscriptions
 */
export type UserCommunitySubscriptionsGetRes = {
  id: uuid;
  res: UserCommunitySubscriptionRes[];
};

/**
 * Communities that a certain user has created
 *
 * @endpoint GET /api/user/<username>/community-creations
 */
export type UserCommunityCreatorsGetRes = {
  id: uuid;
  res: UserCommunityCreatorRes[];
};
