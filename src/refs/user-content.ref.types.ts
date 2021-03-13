import type { mimetype, uuid } from '../helpers/alias.types';

export type UserContentSelect = {
  filename: string;
  type: mimetype;
  id: uuid;
};

export type UserContentPlRequestIn = {
  filename: string;
  type: mimetype;
};
