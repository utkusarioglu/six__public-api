import { isoDate, uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSubRequest } from '../helpers/request.types';
import { BuildSelect } from '../helpers/select.types';
import { WithUserId } from './user.reference.types';

export type VotePipeline = {
  _request: DataNode<{
    voteType: 1 | -1;
  }>;

  _store: DataNode<VotePipeline['_request']['Out']>;

  _insert: DataNode<
    VotePipeline['_store']['Out'],
    {
      voteType: 'vote_type';
    }
  >;

  _db: DataNode<
    VotePipeline['_insert']['Out'],
    {},
    {
      id: uuid;
      created_at: isoDate;
    }
  >;
};

/**
 * Maximal size of the vote object that can be sent back to the client upon
 * request
 */
export type VoteSelect = BuildSelect<VotePipeline>['Select'];

/**
 * Properties of the vote object that need to come from user input for a
 * vote to be saved
 */
type VoteSaveSubRequest = BuildSubRequest<VotePipeline>;

/**
 * Properties required from the user for a Post Vote to be saved to the database
 */
export type PostVoteSaveReq = VoteSaveSubRequest & WithUserId;

/**
 * Properties required from the user for a Comment vote to be saved to the
 * database
 */
export type CommentVoteSaveReq = VoteSaveSubRequest & WithUserId;
