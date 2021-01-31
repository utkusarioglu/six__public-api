import {
  CommunityRes,
  CommunityPostRes,
  CommunitySaveReq,
} from '../references/community.reference';
import { uuid } from '../helpers/helpers';

/**
 * Properties of a single community
 *
 * @endpoint GET /api/community/<community name>
 */
export type CommunityGetRes = {
  id: uuid;
  res: CommunityRes;
};

/**
 * A list of all the available communities
 *
 * @endpoint GET /api/communities
 */
export type CommunitiesGetRes = {
  id: uuid;
  res: CommunityRes[];
};

/**
 * Posts of a single community
 *
 * @endpoint GET /api/community/<community name>/posts
 */
export type CommunityPostsGetRes = {
  id: uuid;
  res: CommunityPostRes[];
};

/**
 * Community creation endpoint
 *
 * @endpoint POST /api/community/create
 */
export type CommunityPostReq = {
  id: uuid;
  req: CommunitySaveReq;
};
