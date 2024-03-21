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
    import { plans } from '$lib/data';
    import { runs } from '$lib/data';
    import { levels } from '$lib/data';


/*      widgetStates.subscribe((value) => {
        widgetControl = value;
    }); 
 */

    import { toggles } from '$lib/stores.js';

    let widgetControl;
    toggles.subscribe((value) => {
    widgetControl = value;
    });

   let state = 'home';

    let tab = 'home';



    //onMount(() => {
    //    console.log(plans)
    //});
    // once you have the data...

    function filter_plans(id) {
    return plans.find((plans) => plans.id === id);
    }

    const filtered_data = filter_plans(1);
    // { id: '3', num: '3', header: 'Run for Fun, Again!', description: 'Just enjoy nature!', current: '0', },
    //console.log(filtered_data);


         // Current Level
 
	function filter_levels(id) {
	return levels.find((levels) => levels.id === id);
	}

	const filtered_levels = filter_levels(1);



     // Latest Run

     function filter_runs(id) {
	return runs.find((runs) => runs.id === id);
	}

	const filtered_runs = filter_runs(1);



     // Add Up Distance

     const runs_dist = runs.map((i) => i.distance)
     console.log(runs_dist);

     let dist_sum = 0;
     for (let i = 0; i < runs_dist.length; i++) {
     dist_sum += runs_dist[i];
     }

     console.log(dist_sum);



     // Get Average Pace

    const runs_pace = runs.map((i) => i.pace)
    console.log(runs_pace);

    let pace_sum = 0;
    for (let i = 0; i < runs_pace.length; i++) {
    pace_sum += runs_pace[i];

    }

    var pace_avg = pace_sum / runs_pace.length;

    console.log(pace_avg);


</script>

<slot>



    <HeaderWithButton page="home" bind:tab></HeaderWithButton>


    <!-- Widgets -->
    {#if (tab == 'widgets')}
    <TabToggler bind:state></TabToggler>

        {#if (state == 'home')}
        <div class="bodyContent">
            <div class="widgetList">
                <div class="map"><HomeWidget where = 'list' id=0 enabled = {widgetControl[0]} widgType = "map" data=" " status = 'closed'></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'list' id=1 enabled = {widgetControl[1]} widgType = "prerun" status = 'closed' data = ''></HomeWidget></div>
                <div class="lav100"><HomeWidget where = 'list' id=2 enabled = {widgetControl[2]} widgType = "experience" status = 'closed' data = 320></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'list' id=3 enabled = {widgetControl[3]} widgType = "dist" status = 'closed' data = {dist_sum}></HomeWidget></div>
                <div class="lav100"><HomeWidget where = 'list' id=4 enabled = {widgetControl[4]} widgType = "pace" status = 'closed' data = {pace_avg}></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'list' id=5 enabled = {widgetControl[5]} widgType = "awards" status = 'closed' data = "Expand to See More"></HomeWidget></div>
                <div class="lav100"><HomeWidget where = 'list' id=6 enabled = {widgetControl[6]} widgType = "records" status = 'closed' data = "Expand to See More"></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'list' id=7 enabled = {widgetControl[7]} widgType = "lastrun" status = 'closed' data = {filtered_runs.date}></HomeWidget></div>
            </div>
        </div>

        {:else if (state == 'run')}
            <div class="bodyContent">
                <!--<TabToggler></TabToggler>-->
                <div class="widgetList">
                    <div class="lav100"><RunWidget widgType = "distance" data = "0.00"></RunWidget></div>
                    <div class="lav200"><RunWidget widgType = "pace" data = "0.00"></RunWidget></div>
                    <div class="lav100"><RunWidget widgType = "timer" data = "0:00"></RunWidget></div>
                    <div class="lav200"><RunWidget widgType = "c25k" data = "WALK"></RunWidget></div>
                </div>
            </div>
        {/if}

    {:else if (tab == 'home')}
<!-- Home -->

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

                <div class="map"><HomeWidget where = 'home' id=0 enabled = {widgetControl[0]} widgType = "map" data=" " status = 'closed'></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'home' id=1 enabled = {widgetControl[1]} widgType = "prerun" status = 'closed' data = ''></HomeWidget></div>
                <div class="lav100"><HomeWidget where = 'home' id=2 enabled = {widgetControl[2]} widgType = "experience" status = 'closed' data = 320></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'home' id=3 enabled = {widgetControl[3]} widgType = "dist" status = 'closed' data = {dist_sum}></HomeWidget></div>
                <div class="lav100"><HomeWidget where = 'home' id=4 enabled = {widgetControl[4]} widgType = "pace" status = 'closed' data = {pace_avg}></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'home' id=5 enabled = {widgetControl[5]} widgType = "awards" status = 'closed' data = "Expand to See More"></HomeWidget></div>
                <div class="lav100"><HomeWidget where = 'home' id=6 enabled = {widgetControl[6]} widgType = "records" status = 'closed' data = "Expand to See More"></HomeWidget></div>
                <div class="lav200"><HomeWidget where = 'home' id=7 enabled = {widgetControl[7]} widgType = "lastrun" status = 'closed' data = {filtered_runs.date}></HomeWidget></div>

                <!--<div class="lav300"><MediumWidget widgetType = totalDist1></MediumWidget></div>
                <div class="lav100"><MediumWidget widgetType = avgPace1></MediumWidget></div>
                <div class="lav300"><MediumWidget widgetType = time></MediumWidget></div>
                <div class="lav100"><MediumWidget widgetType = distanceCovered></MediumWidget></div>-->
            </div>
        </div>
        <StartRunButton></StartRunButton>
     {/if}
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
        padding: 10px 0px 10px 20px;
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