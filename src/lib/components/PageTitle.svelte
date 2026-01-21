<script lang="ts">
	let { title, description }: { title: string; description?: string } = $props();
	import config from '../../config';
</script>

<div class="mb-4">
	<h1 class="text-3xl">{title}</h1>
	{#if description}
		<p class="text-muted">{description}</p>
	{/if}
</div>
