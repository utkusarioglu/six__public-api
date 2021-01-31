import { uuid } from '../helpers/helpers';
import { CommentVoteSave, PostVoteSave } from '../references/vote.reference';

/**
 * Receives the Votes cast by a specific post
 *
 * @endpoint POST /api/post/<post id>/vote/
 */
export type PostVotePostReq = {
  id: uuid;
  req: PostVoteSave;
};

/**
 * Receives the votes cast for a specific comment
 *
 * @endpoint POST /api/comment/<comment id>/vote
 */
export type CommentVotePostReq = {
  id: uuid;
  req: CommentVoteSave;
};
