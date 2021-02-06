export type { CommunitySqlAutoSave } from './references/community.reference';
export type {
  CommunityGetRes,
  CommunityPostReq,
} from './endpoints/community.endpoint';

export type { CommentSqlAutoSave } from './references/comment.reference';
export type { CommentSavePostReq } from './endpoints/comment.endpoint';

export type { VoteSqlAutoSave } from './references/vote.reference';
export type {
  CommentVotePostReq,
  PostVotePostReq,
} from './endpoints/vote.endpoint';

export type {
  UserSqlAutoSave,
  SuccessfulUserLoginRes,
} from './references/user.reference';
export type {
  UserGetRes,
  UserSignupPostReq,
  UserLoginPostReq,
  UserLoginPostRes,
} from './endpoints/user.endpoint';

export type {
  PostGetRes,
  PostsGetRes,
  PostPostReq,
} from './endpoints/post.endpoint';
export type {
  PostSqlAutoSave,
  PostStoreAutoSave,
} from './references/post.reference';

export type { CommentsGetRes } from './endpoints/comment.endpoint';
