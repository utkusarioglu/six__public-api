import { WithPostId } from './post.ref.types';
import { WithUserId } from './user.ref.types';
import { VoteTypes } from './vote.ref.types';

export type PostVotePlRequestIn = {
  voteType: VoteTypes;
} & WithUserId &
  WithPostId;
