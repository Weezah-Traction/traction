<script>
    import BasicPlanItem from "$lib/BasicPlanItem.svelte";
    import NavigationBar from "$lib/NavigationBar.svelte";
    import PreRunChecklist from "$lib/PreRunChecklist.svelte"
    import MediumWidget from "$lib/MediumWidget.svelte";
    import MapWidget from "$lib/MapWidget.svelte";
    import map from '$lib/assets/fakeMap.png';
    import StartRunButton from "$lib/StartRunButton.svelte";
    import HeaderWithButton from "$lib/HeaderWithButton.svelte";
	import HomeWidget from "../lib/HomeWidget.svelte";
	import HomePlanItem from "../lib/HomePlanItem.svelte";
    import TabToggler from "$lib/TabToggler.svelte";
    import RunWidget from "$lib/RunWidget.svelte";
	import { onMount } from "svelte";



    //onMount(() => {
    //    console.log(plans)
    //});
    // once you have the data...

    import { plans } from '$lib/data';
    import { runs } from '$lib/data';

    function filter_plans(id) {
    return plans.find((plans) => plans.id === id);
    }

    const filtered_data = filter_plans(1);
    // { id: '3', num: '3', header: 'Run for Fun, Again!', description: 'Just enjoy nature!', current: '0', },
    //console.log(filtered_data);


    let state = 'home';
    let page = 'home';

</script>

<slot>
    <HeaderWithButton page="home"></HeaderWithButton>

    <!-- Widgets -->

        <div class="bodyContent">
            <div class = "homehead">
                <a class="dayBox" href="/plans">
                    <p class="dayBoxText">DAY</p>
                    <h3 class="dayBoxText">{filtered_data.num}</h3>
                </a>
                <div class="dayContent">
                    <h6>{filtered_data.header}</h6>
                    <p>{filtered_data.description}</p>
                </div>
            </div>

            <div class="homebody">
                <!-- {#each runs as {num, header, description}}
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
                {/each} -->
                <div class="map"><HomeWidget widgType = "map" data=" " status = 'closed'></HomeWidget></div>
                <div class="lav200"><HomeWidget widgType = "prerun" status = 'closed' data = 'replace me'></HomeWidget></div>
                <div class="lav100"><HomeWidget widgType = "experience" status = 'closed' data = 320></HomeWidget></div>
                <div class="lav200"><HomeWidget widgType = "dist" status = 'closed' data = 0.0></HomeWidget></div>
                <div class="lav100"><HomeWidget widgType = "pace" status = 'closed' data = 0.0></HomeWidget></div>
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


    .map{
     /*    background-image: url($lib/assets/fakeMap.png);
        background-size: cover;
        background-position: center; */
        background-color: var(--blue-100);
        border-radius: 0px;
        /* margin: 16px 0px 16px 20px; */
        /* grid-column: 2/ span 5; */
    }

    .homebody {
        margin: 0px 0px 8px 0px;
    }

    .dayBox {
        display: flex;
        width: 110px;
        height: 110px;
        flex-direction: column;
        justify-content: center;
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

    .homehead{ 
        display: flex;
        flex-direction: row;
        grid-column: 1/ span 5;
        padding: 10px 20px;
        gap: 10px;
    }

    a{
        grid-column: 2 ;
        height: 80px;
        border-radius: 1em;
        margin-left: 8px 0px 16px 20px;
    }

/* :global(body) {
    display: grid;
    grid-template-columns: 20px 1fr 10px 1fr 10px 1fr 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
} */

</style>