<script lang="ts">
	import type { PageProps } from './$types';
	import PageTitle from '$lib/components/PageTitle.svelte';
	let { data }: PageProps = $props();
</script>

<PageTitle title="about!" description="un po' di informazioni su di me e su questo blog" />

<p>sono ronnyrun e mi scaco la mutanda</p>
