<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let { data } = $props();
</script>

<SEO
	title="blog!"
	description="questi sono i miei articoli davvero fichi sul mio viaggio nel mondo dei ctf"
	url="/"
/>

<PageTitle
	title="blog!"
	description="questi sono i miei articoli davvero fichi sul mio viaggio nel mondo dei ctf"
/>
<PostsList posts={data.posts} />
