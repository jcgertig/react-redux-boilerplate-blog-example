import { generateCRUDRequests } from 'fetchum';

export default {
  posts: generateCRUDRequests('/posts', 'postId'),
};
