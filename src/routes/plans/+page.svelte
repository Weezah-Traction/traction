<script>
	import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
    import BasicPlanList from "$lib/BasicPlanList.svelte";
	import BasicPlanItem from "../../lib/BasicPlanItem.svelte";
</script>

<BlankHeader page="plans"></BlankHeader>
<div class="bodyContent">
    <h6>Guidance</h6>
    <BasicPlanItem type="guidance"></BasicPlanItem>

    <h6>Week 1 Plan</h6>
    <BasicPlanList></BasicPlanList>
</div>

<NavigationBar></NavigationBar>

<style>
    .bodyContent {
         display: flex;
         flex-direction: column;
         margin: 0 20px;
         padding: 20px 0;
         gap: 20px;
    }
</style>