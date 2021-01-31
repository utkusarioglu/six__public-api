import { PostRes } from './post.reference';

/**
 * Complete community object
 */
interface Community {
  id: string; // uuid
  createdAt: string; // iso string
  description: string;
  name: string;
  slug: string; // url-safe string
  postCount: number; // uint
  subscriberCount: number; // uint
}

/**
 * Properties of community that are auto-filled by the database
 */
export type CommunitySqlAutoSave = Pick<
  Community,
  'id' | 'createdAt' | 'postCount' | 'subscriberCount'
>;

/**
 * Properties of community that are required to be submitted by the user
 * to create a new community
 */
export type CommunitySaveReq = Omit<Community, keyof CommunitySqlAutoSave>;

/**
 * Properties of community that are sent to the client upon request
 */
export type CommunityRes = Community;

/**
 * Properties send to the client when a post that is associated with a community
 * is requested
 */
export type CommunityPostRes = PostRes & {
  communityId: Community['id'];
};
