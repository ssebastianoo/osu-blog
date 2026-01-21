<script lang="ts">
	import { formatDate } from '$lib/utils';
	import config from '../../../config';
	import SEO from '$lib/components/SEO.svelte';

	let { data } = $props();
</script>

<SEO
	title={data.meta.title + " | RonnyRun's DevLog"}
	description={data.meta.description}
	url={`/blog/${data.slug}`}
	type="article"
/>

<svelte:head>
	<meta property="article:published_time" content={data.meta.date} />
	{#each data.meta.tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}

	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			headline: data.meta.title,
			description: data.meta.description,
			datePublished: data.meta.date,
			keywords: data.meta.tags.join(', '),
			url: `${config.siteUrl}/blog/${data.slug}`,
			author: {
				"@type": "Person",
				name: config.siteAuthor
			}
		})}
	</script>
</svelte:head>

<article itemscope itemtype="https://schema.org/BlogPosting">
	<header class="mb-4 rounded border-b-2 border-b-primary bg-card px-4 py-2">
		<h1 class="text-2xl" itemprop="headline">
			{data.meta.title}
		</h1>

		<p class="text-muted" itemprop="description">
			{data.meta.description}
		</p>

		<div class="flex items-end justify-between">
			<div class="flex gap-2">
				{#each data.meta.tags as tag}
					<span class="text-xs text-accent" itemprop="keywords">
						&gt;{tag}
					</span>
				{/each}
			</div>

			<time class="text-sm text-muted" datetime={data.meta.date} itemprop="datePublished">
				{formatDate(data.meta.date)}
			</time>
		</div>
	</header>

	<section
		itemprop="articleBody"
		class="custom-prose prose prose-h2:mt-4 prose-h2:mb-2 prose-h3:mt-4 prose-h3:mb-2 prose-p:m-0 prose-a:no-underline prose-a:hover:underline prose-pre:my-3"
	>
		<data.content />
	</section>
</article>

<style>
	.custom-prose {
		--tw-prose-body: var(--color-foreground);
		--tw-prose-headings: var(--color-foreground);
		--tw-prose-links: var(--color-accent);
		--tw-prose-bold: var(--color-foreground);
		--tw-prose-bullets: var(--color-foreground);
		--tw-prose-hr: var(--color-border);
		--tw-prose-quotes: var(--color-foreground);
		--tw-prose-counters: var(--color-foreground);
		--tw-prose-captions: var(--color-muted);
		--tw-prose-code: var(--color-foreground);
		--tw-prose-pre-code: var(--color-foreground);
		--tw-prose-pre-bg: var(--color-card);
		--tw-prose-th-borders: var(--color-border);
		--tw-prose-td-borders: var(--color-border);
	}
</style>
