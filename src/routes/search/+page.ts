import type { PageLoad } from './$types';
import { getPosts } from '$lib/utils';

export const load = (async () => {
    return { posts: getPosts() };
}) satisfies PageLoad;