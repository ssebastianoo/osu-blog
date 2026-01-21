<script lang="ts">
	import config from '../../config';
	import favicon from '$lib/assets/favicon.svg';

	let {
		title,
		description,
		url,
		type = 'website'
	}: { title?: string; description?: string; url: string; type?: string } = $props();
</script>

<svelte:head>
	<title>{(title ? `${title} | ` : '') + config.siteTitle}</title>

	<meta name="description" content={description || config.siteDescription} />

	<!-- Canonical -->
	<link rel="canonical" href={`${config.siteUrl}/${url}`} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={(title ? `${title} | ` : '') + config.siteTitle} />
	<meta property="og:description" content={description || config.siteDescription} />
	<meta property="og:url" content={`${config.siteUrl}/${url}`} />
	<meta property="og:site_name" content={config.siteTitle} />

	<!-- Optional preview image -->
	<!-- <meta property="og:image" content={config.siteImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" /> -->

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={(title ? `${title} | ` : '') + config.siteTitle} />
	<meta name="twitter:description" content={description || config.siteDescription} />
	<!-- <meta name="twitter:image" content={config.siteImage} /> -->

	<!-- Theme / UX -->
	<meta name="theme-color" content="#ff66aa" />

	<link rel="icon" href={favicon} />
</svelte:head>
