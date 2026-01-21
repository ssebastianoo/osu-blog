<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';

	let { data } = $props();
</script>

<PageTitle
	title="blog!"
	description="questi sono i miei articoli davvero fichi sul mio viaggio nel mondo dei ctf"
/>
<PostsList posts={data.posts} />
