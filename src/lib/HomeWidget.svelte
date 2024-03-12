<script>
     // import expandIcon from "../../lib/expandIcon.svelte";

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
     
     export let status;
     let expanderType;

     export let widgType = "default";
     export let data;
     let end;
     let name;
     let icon;
     let details;

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
          end = "done";
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
          name = 'Average Pace';
          icon = iconRecords;
          end = "";
     }

     if (widgType == "lastrun"){
          name = 'Last Run';
          icon = iconLastRun;
          end = "";
     }
 
   

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
     <details bind:open={isOpen}>
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
               {:else if (widgType == "experience")}
                    <LevelCard></LevelCard>
               {:else if (widgType == "dist")}
                    <div class="milesContainer">
                         <h3 class="Fugaz">0.0</h3>
                         <p class="miles_text">miles ran total</p>
                    </div>
                    <RunThumbnail></RunThumbnail>
                    
               {:else if (widgType == "pace")}
                    <div class="milesContainer">
                         <h3 class="Fugaz">0.0</h3>
                         <p class="miles_text">min/mi on average</p>
                    </div>
                    <RunThumbnail></RunThumbnail>

               {/if}
          </div>
     </details>

</slot>

<style>
     .homeWidg {  
          display: flex;
          width: 393px;
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