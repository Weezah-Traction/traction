<script>
	import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
    import BasicPlanList from "$lib/BasicPlanList.svelte";
	import BasicPlanItem from "../../lib/BasicPlanItem.svelte";

    export let data;

</script>

<BlankHeader page="plans"></BlankHeader>

    <h6>Week 1 Plan</h6>

    <ul> 
        {#each data.plans as {date, header, description}}
            <li>
                <p>{date}</p>
                <h6>{header}</h6>
                <p>{description}</p>
            </li>
        {/each}
    </ul>
    

</div>


<h2>Week 1 Plan</h2>
<BasicPlanList></BasicPlanList>
<NavigationBar></NavigationBar>


<style>
    h2 {
        margin: 24px 0px 0px 20px;
  }
</style>