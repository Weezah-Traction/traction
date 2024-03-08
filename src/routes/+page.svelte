<script>
    import BasicPlanItem from "$lib/BasicPlanItem.svelte";
    import NavigationBar from "$lib/NavigationBar.svelte";
    import PreRunChecklist from "$lib/PreRunChecklist.svelte"
    import MediumWidget from "$lib/MediumWidget.svelte";
    import MapWidget from "$lib/MapWidget.svelte";
    import StartRunButton from "$lib/StartRunButton.svelte";
    import HeaderWithButton from "$lib/HeaderWithButton.svelte";
	import HomeWidget from "../lib/HomeWidget.svelte";
	import HomePlanItem from "../lib/HomePlanItem.svelte";

    export let data;

</script>

<slot>
    <HeaderWithButton page="home"></HeaderWithButton>
    <div class="bodyContent">
        <div class = "homehead">
            <HomePlanItem></HomePlanItem>
        </div>
        <!--{#each data.plans as {num, header, description}}
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
        {/each}-->
        <div class="homebody">
            <MapWidget></MapWidget>
            <div class="lav200"><HomeWidget widgType = "prerun" status = 'closed' data = "0/4"></HomeWidget></div>
            <div class="lav100"><HomeWidget widgType = "experience" status = 'closed' data = "320"></HomeWidget></div>
            <div class="lav200"><HomeWidget widgType = "dist" status = 'closed' data = "0.0"></HomeWidget></div>
            <div class="lav100"><HomeWidget widgType = "pace" status = 'closed' data = "0.0"></HomeWidget></div>
            <!--<div class="lav300"><MediumWidget widgetType = totalDist1></MediumWidget></div>
            <div class="lav100"><MediumWidget widgetType = avgPace1></MediumWidget></div>
            <div class="lav300"><MediumWidget widgetType = time></MediumWidget></div>
            <div class="lav100"><MediumWidget widgetType = distanceCovered></MediumWidget></div>-->
        </div>
    </div>
    <StartRunButton></StartRunButton>
    <NavigationBar></NavigationBar>
</slot>


<style>

    .homebody {
        margin: 0px 0px 8px 0px;
    }

/* :global(body) {
    display: grid;
    grid-template-columns: 20px 1fr 10px 1fr 10px 1fr 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
} */

</style>