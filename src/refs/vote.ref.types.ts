import { uuid } from '../helpers/alias.types';

export type VoteTypes = 1 | -1 | 0;

export type WithVoteId = {
  voteId: uuid;
};
