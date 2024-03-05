<script>
     import BasicPlanItem from "$lib/BasicPlanItem.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
     import PreRunChecklist from "$lib/PreRunChecklist.svelte"
     import MediumWidget from "$lib/MediumWidget.svelte";
      import MapWidget from "$lib/MapWidget.svelte";
      import StartRunButton from "$lib/StartRunButton.svelte";
     import HeaderWithButton from "$lib/HeaderWithButton.svelte";
	import HomeWidget from "../lib/HomeWidget.svelte";
 
 </script>
 
 
<slot>
    <HeaderWithButton page="home"></HeaderWithButton>
    <div class="bodyContent">
        <div class = "homehead">
            <BasicPlanItem></BasicPlanItem>
        </div>
        <div class="homebody">
            <MapWidget></MapWidget>
            <div class="lav200"><HomeWidget widgType = "prerun" data = "0/4"></HomeWidget></div>
            <div class="lav100"><HomeWidget widgType = "experience" data = "320"></HomeWidget></div>
            <div class="lav200"><HomeWidget widgType = "dist" data = "0.0"></HomeWidget></div>
            <div class="lav100"><HomeWidget widgType = "pace" data = "0.0"></HomeWidget></div>
            <div class="lav200"><HomeWidget widgType = "awards" data = "Explain to See More"></HomeWidget></div>
            <div class="lav100"><HomeWidget widgType = "records" data = "Explain to See More"></HomeWidget></div>
            <div class="lav200"><HomeWidget widgType = "lastrun" data = "2/24/2024; 2.53 mi, 5 hr 24 min"></HomeWidget></div>
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
     .homehead {
         margin: 8px 0px 0px 0px;
     }
     .homebody {
         margin: 0px 0px 8px 0px;
     }
     .lav200 {
         background-color: var(--lavender-200);
     }
     .lav100 {
         background-color: var(--lavender-100);
     }
 /* :global(body) {
     display: grid;
     grid-template-columns: 20px 1fr 10px 1fr 10px 1fr 20px;
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
 } */
 
 
 
 
 </style>