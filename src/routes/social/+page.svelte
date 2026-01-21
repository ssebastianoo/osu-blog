<script lang="ts">
	import type { PageProps } from './$types';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO title="social!" description="dove puoi trovarmi online" url="/social" />
<PageTitle title="social!" description="dove puoi trovarmi online" />

<ul class="list-inside list-disc">
	<li>
		<a href="https://github.com/ssebastianoo/osu-blog" class="hover:underline" target="_blank"
			>github</a
		>
	</li>
	<li>
		<a href="https://www.youtube.com/" class="hover:underline" target="_blank">youtube</a>
	</li>
</ul>
