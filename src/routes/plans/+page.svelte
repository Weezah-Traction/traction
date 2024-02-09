<script>
	import Header from "../../lib/Header.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
    import BasicPlanList from "$lib/BasicPlanList.svelte";
	import BasicPlanItem from "../../lib/BasicPlanItem.svelte";
</script>

<Header page="plans"></Header>
<h2>Proper Guidance on How to Run</h2>
<BasicPlanItem type="guidance"></BasicPlanItem>

<h2>Week 1 Plan</h2>
<BasicPlanList></BasicPlanList>
<NavigationBar></NavigationBar>