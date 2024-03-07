<script>
	import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
    import BasicPlanList from "$lib/BasicPlanList.svelte";
	import BasicPlanItem from "../../lib/BasicPlanItem.svelte";

    export let data;

</script>

<slot>
    <BlankHeader page="plans"></BlankHeader>
    <div class="bodyContent">
        <h2>Guidance</h2> 
        <div class="lav200"><BasicPlanItem  type="guidance"></BasicPlanItem></div>
        <!-- Database linking demo
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
        -->

        <h2>Week 1 Plan</h2>
        <!--Database Linking-->
        <ul> 
            {#each data.plans as {num, header, description}}
                <li>
                    <div class="dayBox">
                        <p>DAY</p>
                        <h3>{num}</h3>
                    </div>
                    <h6>{header}</h6>
                    <p>{description}</p>
                </li>
            {/each}
        </ul>
        <!--<BasicPlanList></BasicPlanList>-->
    </div>
    <NavigationBar></NavigationBar>
</slot>

<style>

li{ 
        display: flex;
        flex-direction: row;
        grid-column: 1/ span 5;
        padding: 10px 0px 10px 20px;
    }

    h2 {
        margin: 0 20px;
  }

  .l300 {
    background-color: var(--Lavender-300);
  }


</style>