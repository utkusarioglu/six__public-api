import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type UserVotePipeline = {
  _request: DataNode<{
    userId: uuid;
    voteId: uuid;
  }>;

  _store: DataNode<UserVotePipeline['_request']['Out']>;

  _insert: DataNode<
    UserVotePipeline['_store']['Out'],
    {
      userId: 'user_id';
      voteId: 'vote_id';
    }
  >;

  _db: DataNode<
    UserVotePipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type UserVoteSelect = BuildSelect<UserVotePipeline>['Select'];
