import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type CommentVotePipeline = {
  _request: DataNode<{
    voteId: uuid;
    commentId: uuid;
  }>;

  _store: DataNode<CommentVotePipeline['_request']['Out']>;

  _insert: DataNode<
    CommentVotePipeline['_store']['Out'],
    {
      voteId: 'vote_id';
      commentId: 'comment_id';
    }
  >;

  _db: DataNode<
    CommentVotePipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type CommentVoteSelect = BuildSelect<CommentVotePipeline>['Select'];
