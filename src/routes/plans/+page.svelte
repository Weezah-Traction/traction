<script>
	import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
    import BasicPlanList from "$lib/BasicPlanList.svelte";
	import BasicPlanItem from "../../lib/BasicPlanItem.svelte";
</script>

<BlankHeader page="plans"></BlankHeader>
<h2>Proper Guidance on How to Run</h2>
<BasicPlanItem type="guidance"></BasicPlanItem>

<h2>Week 1 Plan</h2>
<BasicPlanList></BasicPlanList>
<NavigationBar></NavigationBar>