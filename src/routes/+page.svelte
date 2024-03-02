<script>
     import BasicPlanItem from "$lib/BasicPlanItem.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
     import PreRunChecklist from "$lib/PreRunChecklist.svelte"
     import MediumWidget from "$lib/MediumWidget.svelte";
      import MapWidget from "$lib/MapWidget.svelte";
      import RunButton from "$lib/RunButton.svelte";
     import HeaderWithButton from "$lib/HeaderWithButton.svelte";
 
 </script>
 
 
 <slot>
 
 <HeaderWithButton page="home"></HeaderWithButton>
 
 <div class = "homehead">
     <BasicPlanItem></BasicPlanItem>
 </div>
 
 <div class="homebody">
    <MapWidget></MapWidget>
     <!-- <PreRunChecklist></PreRunChecklist> -->
     <div class="lav300"><MediumWidget widgetType = totalDist1></MediumWidget></div>
     <div class="lav100"><MediumWidget widgetType = avgPace1></MediumWidget></div>
     <div class="lav300"><MediumWidget widgetType = time></MediumWidget></div>
     <div class="lav100"><MediumWidget widgetType = distanceCovered></MediumWidget></div>   
     
     <RunButton></RunButton>
 </div>
 
 
 <NavigationBar></NavigationBar>
 </slot>
 
 
 <style>
     .homehead {
         margin: 8px 0px 0px 0px;
     }
     .homebody {
         margin: 0px 0px 8px 0px;
     }
     .lav300 {
         background-color: var(--lavender-300);
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