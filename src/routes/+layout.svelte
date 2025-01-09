<script>
	import '@fontsource-variable/figtree';
	import 'iconify-icon';

	import figtreeVariable from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2';
	import figtreeVariableItalic from '@fontsource-variable/figtree/files/figtree-latin-wght-italic.woff2';

	import { MetaTags } from 'svelte-meta-tags';

	import { page } from '$app/stores';

	import '../app.postcss';

	import { onMount } from 'svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	onMount(() => {
		navigator.mediaSession.setActionHandler('play', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('pause', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekbackward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('seekforward', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('previoustrack', function () {
			/* Code excerpted. */
		});
		navigator.mediaSession.setActionHandler('nexttrack', function () {
			/* Code excerpted. */
		});
	});

	const siteTitle = 'Lofiworld';

	const siteDescription =
		'Take leisurely walks and drives around the world while chilling to lofi music 🎶';

	const siteURL = 'https://tan.ad/';

	const ogImage = `${$page.url.origin}/og.jpg`;

	const twtImage = `${$page.url.origin}/twitter.jpg`;
</script>

<svelte:head>
	{#each [figtreeVariable, figtreeVariableItalic] as ft}
		<link rel="preload" as="font" crossorigin="anonymous" href={ft} type="font/woff2" />
	{/each}
</svelte:head>



<MetaTags
	title="Lofiworld | Take a break from the world and travel with Lofiworld!"
	description={siteDescription}
	canonical={siteURL}
	openGraph={{
		url: siteURL,
		title: siteTitle,
		description: siteDescription,
		images: [{ url: ogImage }],
		siteName: 'Lofiworld'
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
		image: twtImage
	}}
/>

{@render children?.()}
