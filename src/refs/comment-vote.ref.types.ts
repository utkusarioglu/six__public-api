import { WithCommentId } from './comment.ref.types';
import { WithUserId } from './user.ref.types';
import { VoteTypes } from './vote.ref.types';

export type CommentVotePlRequestIn = {
  voteType: VoteTypes;
} & WithUserId &
  WithCommentId;
