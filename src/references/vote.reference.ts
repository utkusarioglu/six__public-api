import type { uuid } from '../helpers/helpers';
import type { UserGetRes } from '../endpoints/user.endpoint';
import type { PostGetRes } from '../endpoints/post.endpoint';
import type { CommentsGetRes } from '../endpoints/comment.endpoint';

/**
 * Complete vote object
 */
interface Vote {
  id: uuid;
  voteType: 1 | -1;
  createdAt: number; // js epoch
}

/**
 * Properties of vote object that are auto filled by the sql engine
 */
export type VoteSqlAutoSave = Pick<Vote, 'id' | 'createdAt'>;

/**
 * Maximal size of the vote object that can be sent back to the client upon
 * request
 */
export type VoteRes = Vote;

/**
 * Properties of the vote object that need to come from user input for a
 * vote to be saved
 */
type VoteSave = Omit<Vote, keyof VoteSqlAutoSave>;

/**
 * Properties required from the user for a Post Vote to be saved to the database
 */
export type PostVoteSave = VoteSave & {
  userId: UserGetRes['res']['id'];
  postId: PostGetRes['res']['id'];
};

/**
 * Properties required from the user for a Comment vote to be saved to the
 * database
 */
export type CommentVoteSave = VoteSave & {
  userId: UserGetRes['res']['id'];
  commentId: CommentsGetRes['res'][0]['id'];
};
