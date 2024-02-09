<script>
	import BasicPlanItem from "$lib/BasicPlanItem.svelte";
    import Header from "$lib/Header.svelte";
    import NavigationBar from "$lib/NavigationBar.svelte";
    import PreRunChecklist from "$lib/PreRunChecklist.svelte"
    import MediumWidget from "../../lib/MediumWidget.svelte";
	import MapWidget from "../../lib/MapWidget.svelte";
	import RunButton from "../../lib/RunButton.svelte";

</script>

<Header></Header>
<BasicPlanItem></BasicPlanItem>
<MapWidget></MapWidget>
<PreRunChecklist></PreRunChecklist>
<MediumWidget widgetType = avgPace1></MediumWidget>
<MediumWidget widgetType = totalDist1></MediumWidget>
<RunButton></RunButton>
<NavigationBar></NavigationBar>
