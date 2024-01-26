<script>
	import NavigationBar from '$lib/NavigationBar.svelte';
	import NavigationBarButton from '$lib/NavigationBarButton.svelte';
	import PrimaryButton from '$lib/PrimaryButton.svelte';
	import SmallWidget from '$lib/SmallWidget.svelte';
</script>


<h1>Development Test</h1>

<PrimaryButton type="primary">
	<p slot="text"></p>
</PrimaryButton>
<SmallWidget></SmallWidget>
<NavigationBar></NavigationBar>


