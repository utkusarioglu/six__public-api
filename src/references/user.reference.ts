import type { CommentRes } from './comment.reference';
import type { CommunityRes } from './community.reference';
import type { VoteRes } from './vote.reference';

/**
 * Complete user object
 */
interface User {
  id: string; // uuid
  username: string; //url-safe string
  age: number; // uint
  password: string;
  email: string; // email
}

/**
 * Login request required fields
 */
export type UserLoginReq = Pick<User, 'email' | 'password'>;

/**
 * Response to a login request
 */
export type UserLoginRes = SuccessfulUserLoginRes | FailedUserLoginRes;

/**
 * Response if the user login response is a success
 */
export type SuccessfulUserLoginRes = Omit<User, 'password'> & {
  loggedIn: true;
};

/**
 * Response if the user login response is a fail
 */
export type FailedUserLoginRes = {
  error: true;
  loggedIn: false;
};

/**
 * Properties of User that are auto filled by the sql engine
 */
export type UserSqlAutoSave = Pick<User, 'id'>;

/**
 * properties of User that need to come from user input for a new user to be
 * created
 */
export type UserSave = Omit<User, keyof UserSqlAutoSave>;

/**
 * Maximal size of the user object that is sent to the client
 */
export type UserRes = Omit<User, 'password'>;

/**
 * Votes cast by a certain user for certain posts
 */
export type UserPostVoteRes = VoteRes & {
  postId: string; // uuid
};

/**
 * Votes cast by a certain user for certain comments
 */
export type UserCommentVoteRes = VoteRes & {
  commentId: CommentRes['id'];
};

/**
 * Community subscription of a user
 */
export type UserCommunitySubscriptionRes = CommunityRes & {
  userId: User['id'];
};

/**
 * Community creation of a user
 *
 * @remark
 * References the the record of creation of a certain community
 * by a user
 */
export type UserCommunityCreatorRes = CommunityRes & {
  userId: User['id'];
};

/**
 * Comment made by a particular user
 */
export type UserCommentRes = CommentRes & {
  userId: User['id'];
};
