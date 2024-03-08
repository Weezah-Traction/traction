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
        <div class="lav300"><BasicPlanItem  type="guidance"></BasicPlanItem></div>
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
                    <a class="dayBox" href="/plans">
                        <p class="dayBoxText">DAY</p>
                        <h3 class="dayBoxText">{num}</h3>
                    </a>
                    <div class="dayContent">
                        <h6>{header}</h6>
                        <p>{description}</p>
                    </div>
                </li>
            {/each}
        </ul>
        <!--<BasicPlanList></BasicPlanList>-->
    </div>
    <NavigationBar></NavigationBar>
</slot>

<style>

    .dayBox {
        display: flex;
        width: 80px;
        height: 80px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 20px;
        background: var(--Lavender-500, #9074C1);
    }

    .dayContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .dayBoxText {
        color: var(--lavender-100);
        margin: 0;
    }

    li{ 
        display: flex;
        flex-direction: row;
        grid-column: 1/ span 5;
        padding: 10px 0px 10px 20px;
        gap: 10px;
    }

    a{
        grid-column: 2 ;
        height: 80px;
        border-radius: 1em;
        margin-left: 8px 0px 16px 20px;
    }

    h2 {
        margin: 0 20px;
    }


</style>