<script>
	import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
    import BasicPlanList from "$lib/BasicPlanList.svelte";
	import BasicPlanItem from "../../lib/BasicPlanItem.svelte";
</script>

<BlankHeader page="plans"></BlankHeader>

<h2>Run Guidance</h2>
        
<div class="l300"> 
    <BasicPlanItem  type="guidance"></BasicPlanItem>
    </div>

<h2>Week 1 Plan</h2>
<BasicPlanList></BasicPlanList>
<NavigationBar></NavigationBar>


<style>
    h2 {
        margin: 24px 0px 0px 20px;
  }

  .l300 {
    background-color: var(--Lavender-300);
  }


</style>