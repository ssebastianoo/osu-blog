<script lang="ts">
	import type { PageProps } from './$types';
	import PostsList from '$lib/components/PostsList.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { onMount } from 'svelte';

	let { data }: PageProps = $props();

	let query = $state('');

	function updateQuery() {
		const params = new URLSearchParams(window.location.search);
		query = params.get('query') || '';
	}

	onMount(() => {
		updateQuery();

		window.addEventListener('popstate', updateQuery);

		const push = history.pushState;
		const replace = history.replaceState;

		history.pushState = function (...args) {
			push.apply(this, args);
			updateQuery();
		};

		history.replaceState = function (...args) {
			replace.apply(this, args);
			updateQuery();
		};

		return () => {
			window.removeEventListener('popstate', updateQuery);
			history.pushState = push;
			history.replaceState = replace;
		};
	});

	let posts = $derived(
		data.posts.filter(
			(p) =>
				p.title.toLowerCase().includes(query.toLowerCase()) ||
				p.description.toLowerCase().includes(query.toLowerCase()) ||
				p.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
				p.date.toLowerCase().includes(query.toLowerCase())
		)
	);
</script>

<SEO
	title={'search! "' + query + '"'}
	description={'Risultati della ricerca per "' + query + '"'}
	url="/search"
/>
<PageTitle title={'search! "' + query + '"'} />
<PostsList {posts} />
