<script>
     // import expandIcon from "../../lib/expandIcon.svelte";
     import { onMount } from 'svelte';

     import iconMap from '$lib/assets/widgIcons/mapIcon.svg';
     import iconPreRun from '$lib/assets/widgIcons/prerunIcon.svg';
     import PreRunChecklist from '$lib/PreRunChecklist.svelte';
     import RunThumbnail from '$lib/RunThumbnail.svelte';
     import iconExp from '$lib/assets/widgIcons/expIcon.svg';
     import iconDist from '$lib/assets/widgIcons/distIcon.svg';
     import iconPace from '$lib/assets/widgIcons/paceIcon.svg';
     import iconAwards from '$lib/assets/widgIcons/awardsIcon.svg';
     import iconRecords from '$lib/assets/widgIcons/recordsIcon.svg';
     import iconLastRun from '$lib/assets/widgIcons/lastrunIcon.svg';
     import expanderOpen from '$lib/assets/expOpen.svg';
     import expanderClosed from '$lib/assets/expClose.svg';
	import LevelCard from './LevelCard.svelte';

/*      import { widgetStates } from '$lib/store.js'; */

     import { toggles } from '$lib/stores.js';

     let widgetControl;
     toggles.subscribe((value) => {
     widgetControl = value;
     });


     import { widgets } from '$lib/data';
     import { levels } from '$lib/data';
     import { runs } from '$lib/data';
     
     export let status;
     export let enabled;
     export let where;
     export let id;

     let expanderType;

     export let widgType = "default";
     export let data;
     let end;
     let name;
     let icon;
     let details;
     let map = false;

     if (status == 'closed'){
          expanderType = expanderOpen;
     }

     if (status == 'opened'){
          expanderType = expanderClosed;
     }


     let isOpen = false;


     if (widgType == "default"){
          name = 'Default Widget';
          icon = iconMap;
          end = "Default Widget";
     }

     if (widgType == "prerun"){
          name = 'Pre-Run Checklist';
          icon = iconPreRun;
          end = "/ 4 done";
          details = PreRunChecklist;
     }

     if (widgType == "experience"){
          name = 'Experience';
          icon = iconExp;
          end = "XP";
     }

     if (widgType == "dist"){
          name = 'Total Distance';
          icon = iconDist;
          end = "mi";
     }
     
     if (widgType == "pace"){
          name = 'Average Pace';
          icon = iconPace;
          end = "mi/min";
     }

     if (widgType == "awards"){
          name = 'Awards';
          icon = iconAwards;
          end = "";
     }

     if (widgType == "records"){
          name = 'Records';
          icon = iconRecords;
          end = "";
     }

     if (widgType == "lastrun"){
          name = 'Last Run';
          icon = iconLastRun;
          end = "";
     }

     if (widgType == "map"){
          name = 'Map';
          icon = iconMap;
          end = "";
          map = true;
     }



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

     let state;
  
     if (where == 'list'){
          if (enabled == 'shown'){
               state = 'hidden';
          } else if (enabled = 'hidden'){
               state = 'shown';
          };
     };

     if (where == 'home'){
          state = enabled;
     };




     let box
     let xScroll = 0
     let yScroll = 0

     function parseScroll() {
          xScroll=box.scrollLeft;
          yScroll=box.scrollTop;

          if(xScroll > 340){
               widgetControl[id] = 'hidden';
               toggles.set(widgetControl);
               state = 'hidden';

           /*     toggles.update((toggles) => { // Use update function
               toggles[id] = 'hidden';
           }); */
          }
     }

     function addWidget(){
          widgetControl[id] = 'shown';
          toggles.set(widgetControl);
          state = 'hidden';
     }



     // Add Up Checkboxes

     onMount(() => {
    const selectedElm = document.getElementById('selected');

    function showChecked(){
        selectedElm.innerHTML = document.querySelectorAll('input[name=prerun]:checked').length;
    }

        document.querySelectorAll("input[name=prerun]").forEach(i=>{
        i.onclick = () => showChecked();
    })});



</script>

<slot>
     <!--<div class="homeWidg">
          <div class="widgContent">
               <div class="iconandtext"> 
                    <div class="icon">
                         <img class="iconImg" src={icon} alt="Widget Icon">
                    </div>
                    <p class="widgetName">{name}</p>
               </div>
               <div class="expandIconandtext">
                    <h4 class="widgetData">{data} {end}</h4>
               </div>
          </div>
          <div class="expander">
               <img class='expanderImg' src={expanderType} alt='Expander'>
          </div>
     </div>-->
     {#if (state == 'shown')}
     <div class="swipe-container" id="widget" bind:this={box} on:scroll={parseScroll}>

          {#if (where == 'home')}

          <details class="swipe-element" bind:open={isOpen}>
               <summary>
                    <div class="homeWidg">
                         <div class="widgContent">
                              <div class="iconandtext"> 
                                   <div class="icon">
                                        <img class="iconImg" src={icon} alt="Widget Icon">
                                   </div>
                                   <p class="widgetName">{name}</p>
                              </div>
                              <div class="expandIconandtext">
                                   <h4 class="widgetData">{data} {end}</h4>
                              </div>
                         </div>          
                         <div class="expander">
                              {#if isOpen}
                                        <img class='expanderImg' src={expanderClosed} alt='Expander'>
                              {:else}
                                        <img class='expanderImg' src={expanderOpen} alt='Expander'>
                              {/if}
                         </div>

                    </div>
               </summary>
               <div class="widgContentExpanded">
                    {#if (widgType == "prerun")}
                         <PreRunChecklist></PreRunChecklist>
                         <div id="result"><span id="selected">0</span>/4 done</div> 

                    {:else if (widgType == "map")}
                         <div class="map"></div>

                    {:else if (widgType == "experience")}
                    <LevelCard
                         levelName = {filtered_levels.title}
                         currentXP = {filtered_levels.currentXP}
                         nextXP = {filtered_levels.xp}
                         streakNum = {filtered_levels.streak}
                    ></LevelCard>

                    {:else if (widgType == "dist")}
                         <div class="milesContainer">
                              <h3 class="Fugaz">{dist_sum}</h3>
                              <p class="miles_text">miles ran total</p>
                         </div>
                         <RunThumbnail
                              date = {filtered_runs.date}
                              distance = {filtered_runs.distance}
                              pace = {filtered_runs.pace}
                              emotion = {filtered_runs.emotion}
                              link = '/activity/pastrun/?id={filtered_runs.id}'
                         ></RunThumbnail>
                         
                    {:else if (widgType == "pace")}
                         <div class="milesContainer">
                              <h3 class="Fugaz">{pace_avg}</h3> <!--Currently added up instead of avg-->
                              <p class="miles_text">min/mi on average</p>
                         </div>
                         <RunThumbnail
                              date = {filtered_runs.date}
                              distance = {filtered_runs.distance}
                              pace = {filtered_runs.pace}
                              emotion = {filtered_runs.emotion}
                              link = '/activity/pastrun/?id={filtered_runs.id}'
                         ></RunThumbnail>
                    {/if}
               </div>
          </details>

          <div class="action right">
               <i>Trash!</i>
          </div>
          {:else if (where == 'list')}
               <div class="homeWidg">
                    <div class="widgContent">
                         <div class="iconandtext"> 
                              <div class="icon">
                                   <img class="iconImg" src={icon} alt="Widget Icon">
                              </div>
                              <p class="widgetName">{name}</p>
                         </div>
                         <div class="expandIconandtext">
                              <h4 class="widgetData">{data} {end}</h4>
                         </div>
                    </div>          
                    <div class="expander">
                         <button class="plusImg" on:click={addWidget}>
                             +
                         </button>
                    </div>
               </div>
               

          {/if}
     
     </div>  
     {:else if (state == 'hidden')}

     <div></div>
     {/if}

</slot>

<style>

     button{
          cursor: pointer;
          border: 3px solid var(--lavender-600);
          background: none;
          border-radius: 50em;
     }

     .swipe-container {
          display: flex;
          overflow: hidden;
          overflow-x: scroll;
          scroll-snap-type: x proximity;
     }

     .swipe-element{
          min-width: 100%;
          overflow: hidden;
          scroll-snap-type: x proximity;
          scroll-snap-align: start;
     }

     .action, .swipe-element{
          min-width: 100%;
     }

     .right{
          justify-content: flex-end;
          background-color: orchid;
     }

     .action {
          display: flex;
          align-items: center;
          justify-content: center;
     }

     i{
          color: white;
          position: sticky;
          left: 50px;
          right: 200px;
     }


     .homeWidg {  
          display: flex;
          min-width: 100%;
          height: 100px;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
     }

     .widgContent {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          margin: 0px;
          height: 100px;
          /* gap: 10px; */

          border-radius: 0px;
          /* background: var(--Lavender-300, #DFCEFD); */
     }

     .widgContentExpanded {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin: 0px;
          border-radius: 0px;
     } 

     .expander {
          display: flex;
          padding-right: 20px;
     }

     .milesContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
     }

     .miles_text{
          font-weight: bold;
     }

     .widgetName {
          color: var(--Lavender-700, #2A2534);
          text-align: center;
          /* Poppins/Bold/Body */
          font-family: "Fugaz One";
          font-size: 23.5px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 0.8px;
          margin: 0;
     }

     .widgetData {
          /*padding-left: 20px;*/
          color: var(--Lavender-700, #2A2534);
          text-align: center;
          /* Fugaz/H4 */
          font-family: Poppins;
          font-size: 19.2px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.382px;
          margin: 0;
          
     }

     .iconandtext{
          display: flex;
          flex-direction: row;
          /*margin-left: 20px;*/
          justify-content: start;
          align-items: center;
          gap: 10px;
     }

     .iconImg {
          width: 22px;
          height: 22px;
     }

     .expanderImg {
          width: 28px;
          height: 14px;
     }

     .plusImg {
          width: 1.5em;
          height: 1.5em;
          font-size: 1.5em;
          color: var(--lavender-600);
     }

     .map{
          height: 12em;
     }


     details {
          cursor: pointer;
          width: 100%;
     }

     details summary::-webkit-details-marker {
          display:none;
     }

     details > summary{
          list-style-type: none;
          list-style-image: url({expanderOpen});
     }

     details[open] > summary{
          list-style-type: none;
          list-style-image: url({expanderClosed});
     }

    /* .expandIcon {
     display: flex;
     flex-direction: row;
     align-self: flex-end;
     
     background-color: wheat;
     width: 22px;
     height: 22px;
     margin-right: 20px;
     /* margin-bottom: 20px; */



     details summary {
          cursor: pointer;
          margin-bottom: -10px; /* for more prominent move */
          transition: margin 150ms ease-out;
     }

     details[open] summary {
          margin-bottom: 10px;
     }
     
    
</style>