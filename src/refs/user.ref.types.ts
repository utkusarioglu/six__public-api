import type { CommentRes } from './comment.ref.types';
import type { uint, uuid } from '../helpers/alias.types';

export type UserSelect = {
  username: string;
  age: number;
  password: string;
  email: string;
  id: uuid;
};

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
export type UserLoginResSuccessful = Omit<UserPlRequestIn, 'password'> & {
  id: uuid;
  state: 'logged-in';
};

/**
 * Tells that the session is now a visitor session
 */
export type VisitorSessionRes = {
  state: 'visitor';
};

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

export type UserPlRequestIn = {
  username: string;
  age: uint;
  password: string;
  email: string;
};

/**
 * LOGIN
 */

/**
 * Login request required fields
 */
export type UserLoginSubRequest = Pick<UserPlRequestIn, 'email' | 'password'>;
