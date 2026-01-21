<script lang="ts">
	import type { PageProps } from './$types';
	import PageTitle from '$lib/components/PageTitle.svelte';
	let { data }: PageProps = $props();
</script>

<PageTitle title="social!" description="dove puoi trovarmi online" />

<ul class="list-inside list-disc">
	<li>
		<a href="https://github.com/ronnyrun" class="hover:underline" target="_blank">github</a>
	</li>
	<li>
		<a href="https://www.youtube.com/c/ronnyrun" class="hover:underline" target="_blank">youtube</a>
	</li>
</ul>
