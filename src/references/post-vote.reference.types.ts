import { uuid } from '../helpers/alias.types';
import { DataNode } from '../helpers/data-node';
import { BuildSelect } from '../helpers/select.types';

export type PostVotePipeline = {
  _request: DataNode<{
    postId: uuid;
    voteId: uuid;
  }>;

  _store: DataNode<PostVotePipeline['_request']['Out']>;

  _insert: DataNode<
    PostVotePipeline['_store']['Out'],
    {
      postId: 'post_id';
      voteId: 'vote_id';
    }
  >;

  _db: DataNode<
    PostVotePipeline['_insert']['Out'],
    {},
    {
      id: uuid;
    }
  >;
};

export type PostVoteSelect = BuildSelect<PostVotePipeline>['Select'];
