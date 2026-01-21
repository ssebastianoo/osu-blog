<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	let { posts }: { posts: Post[] } = $props();
</script>

<div class="space-y-2">
	{#if posts.length === 0}
		<p class="text-muted">nessun post da vedere qui :&#40;</p>
	{/if}

	{#each posts as post}
		<a
			href={'/blog/' + post.slug}
			class="flex flex-col gap-2 rounded-md border-l-4 border-l-primary bg-card px-6 py-2 [transition:border_0.1s_ease-in-out] hover:border-l-10"
		>
			<div class="space-y-1">
				<h2 class="text-xl leading-5">{post.title}</h2>
				<p class="text-sm leading-4 text-muted">
					{post.description}
				</p>
			</div>
			<div class="flex items-end justify-between">
				<div class="flex gap-2">
					{#each post.tags as tag}
						<p class="text-xs text-accent">&gt;{tag}</p>
					{/each}
				</div>
				<div>
					<p class="text-sm text-muted">{formatDate(post.date)}</p>
				</div>
			</div>
		</a>
	{/each}
</div>
