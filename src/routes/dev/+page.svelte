<script>
	import NavigationBar from '$lib/NavigationBar.svelte';
	import NavigationBarButton from '$lib/NavigationBarButton.svelte';
	import PrimaryButton from '$lib/PrimaryButton.svelte';
	import SmallestWidget from '$lib/SmallestWidget.svelte';
</script>


<h1>Development Test</h1>

<PrimaryButton type="primary">
	<p slot="text">Edit Widgets +</p>
</PrimaryButton>
<SmallestWidget>
	<h2 slot="widgDisplay">10.0m</h2>
	<header slot="widgName">Distance</header>
</SmallestWidget>
<NavigationBar></NavigationBar>


