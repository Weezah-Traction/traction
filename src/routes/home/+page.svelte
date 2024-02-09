<script>
	import BasicPlanItem from "$lib/BasicPlanItem.svelte";
    import Header from "$lib/Header.svelte";
    import NavigationBar from "$lib/NavigationBar.svelte";
    import PreRunChecklist from "$lib/PreRunChecklist.svelte"
    import SmallestWidget from "$lib/SmallestWidget.svelte"
	import MapWidget from "../../lib/MapWidget.svelte";
	import RunButton from "../../lib/RunButton.svelte";

</script>

<Header></Header>
<BasicPlanItem></BasicPlanItem>
<MapWidget></MapWidget>
<PreRunChecklist></PreRunChecklist>
<SmallestWidget></SmallestWidget>
<SmallestWidget></SmallestWidget>
<RunButton></RunButton>
<NavigationBar></NavigationBar>
