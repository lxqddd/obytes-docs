import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Post } from './types';

type Response = Post[];
type Variables = void; // 由于 react-query-kit 是强类型的，我们需要在不需要变量的情况下将变量类型指定为 void

export const usePosts = createQuery<Response, Variables, AxiosError>({
  queryKey: ['posts'],
  fetcher: () => {
    return client.get(`posts`).then((response) => response.data.posts);
  },
});
