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
     import AchievementsFlowerContainer from '$lib/AchievementsFlowerContainer.svelte';
     import AchievementsButton from '$lib/AchievementsButton.svelte';
     import RecordItem from './RecordItem.svelte';


     import mapsrc from '$lib/assets/fakeMap.png';

     import vhappyIcon from '$lib/assets/faceIcons/VHappyIcon.svg';
     import happyIcon from '$lib/assets/faceIcons/HappyIcon.svg';
     import normalIcon from '$lib/assets/faceIcons/NormalIcon.svg';
     import sadIcon from '$lib/assets/faceIcons/SadIcon.svg';
     import vsadIcon from '$lib/assets/faceIcons/VSadIcon.svg';

     import cross from '$lib/assets/cross.svg';

/*      import { widgetStates } from '$lib/store.js'; */

     import { toggles } from '$lib/stores.js';

     let widgetControl;
     toggles.subscribe((value) => {
     widgetControl = value;
     });


     import { widgets } from '$lib/data';
     import { levels } from '$lib/data';
     import { runs } from '$lib/data';
     import { awards } from '$lib/data';
     import { records } from '$lib/data';
     
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
          end = "";
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


     /////////////////////////////////////
     /////////////////////////////////////
     // Runs Code

     function filter_runs(id) {
	return runs.find((runs) => runs.id === id);
	}

	const filtered_runs = filter_runs(1);

     // Pulled Emotion

     let pulledEmotion;

     if (filtered_runs.emotion == 'vsad'){
          pulledEmotion = vsadIcon;
     }

     if (filtered_runs.emotion == 'sad'){
          pulledEmotion = sadIcon;
     }

     if (filtered_runs.emotion == 'normal'){
          pulledEmotion = normalIcon;
     }

     if (filtered_runs.emotion == 'happy'){
          pulledEmotion = happyIcon;
     }

     if (filtered_runs.emotion == 'vhappy'){
          pulledEmotion = vhappyIcon;
     }

     // For Making distance look right

     let durMinutes = (Math.floor((filtered_runs.duration % (1000 * 60 * filtered_runs.duration)) / (1000 * 60)));
     let durSeconds = (Math.floor((filtered_runs.duration % (1000 * 60)) / 1000));

     let durMinutesFormatted = durMinutes.toLocaleString('en-US');
     let durSecondsFormatted = durSeconds.toLocaleString('en-US' , {minimumIntegerDigits: 2});



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

     // <><><><><><><><><><><><><><><><><><><><><><><>
     // <><><><><><><><><><><><><><><><><><><><><><><>
     // <><><><><><><> Awards Functions <><><><><><><>

     const awards_type_one = awards.filter((item) => item.type === 1);
     const awards_dates = awards_type_one.map((i) => i.date)

    /**
     * This line of code is using the `map` function to transform each element
     * of the `dates` array into a new array called `new_dates`.
     * The callback function is `(date) => new Date(date)`, which takes a date
     * string in the format 'MM/DD/YYYY' and returns a new `Date` object representing that date.
     * `new_dates` is an array of `Date` objects, each representing a date in the `dates` array.
     */
    const new_dates = awards_dates.map((date) => new Date(date));
    console.log(new_dates);

    /**
     * This function takes an array of Date objects, sorts them from most recent to least recent,
     * takes the first three dates, and returns them as strings in the format MM/DD/YYYY.
     *
     * @param {Date[]} dates_array - An array of Date objects.
     * @returns {string[]} An array of the three most recent dates, formatted as strings.
     */
    function get_most_recent_dates(dates_array) {
    return dates_array
        .sort((a, b) => b.getTime() - a.getTime()) //Sort by newest first
        .slice(0, 3) // Get the first 3 items
        .map(
        (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        ); // Format as strings
    }

    const most_recent_dates = get_most_recent_dates(new_dates);
    console.log(most_recent_dates);

    // const filtered_awards_data = awards.filter((item) => item.date === most_recent_dates);
    // console.log(filtered_awards_data);

    // const filtered_awards_data = awards.filter((item) => {
    //     console.log(item);
    //     console.log(item.date);
    //     console.log(most_recent_dates);
    //     return item.date === most_recent_dates
    // });

    function filter_by_most_recent_dates(awards, most_recent_dates) {
        return awards.filter((award) => most_recent_dates.includes(award.date));
    }

    const filtered_awards = filter_by_most_recent_dates(awards, most_recent_dates);
    console.log(filtered_awards);




     function filter_awards(type) {
          return awards.find((awards) => awards.type === type);
     }

     const filtered_data = filter_awards(1);
     console.log(filtered_data);

     // <><><><><><><><><><><><><><><><><><><><><><><>
     // <><><><><><><><><><><><><><><><><><><><><><><>
     // <><><><><><><> Records Functions <><><><><><><>

	function filter_records(id) {
	return records.find((records) => records.id === id);
	}

	const filtered_records = filter_records(1);



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
                         <div id="result">
                              <h6 id="selected">0</h6>
                              <h6>/4 done</h6>
                         </div> 
                         <PreRunChecklist></PreRunChecklist>

                    {:else if (widgType == "map")}
                         <div class="map"></div>

                    {:else if (widgType == "experience")}
                         <div class="expandedContent">
                              <LevelCard
                                   levelName = {filtered_levels.title}
                                   currentXP = {filtered_levels.currentXP}
                                   nextXP = {filtered_levels.xp}
                                   streakNum = {filtered_levels.streak}
                              ></LevelCard>
                         </div>

                    {:else if (widgType == "dist")}
                         <div class="expandedContent">
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
                         </div>

                    {:else if (widgType == "pace")}
                         <div class="expandedContent">
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
                         </div>

                    {:else if (widgType == "awards")}
                         <div class="expandedContent">
                              <div class="mostRecentAwards">
                                   {#each filtered_awards as {title, date, xp}}
                                   <AchievementsFlowerContainer
                                        name = {title}
                                        xp = {xp}
                                        date = {date}
                                   ></AchievementsFlowerContainer>
                                   {/each}
                              </div>
                              <AchievementsButton link="/activity/awards" text="View All Awards"></AchievementsButton>
                         </div>

                    {:else if (widgType == "records")}
                         <div class="expandedContent">
                              <div class="recordContainer"><RecordItem
                                  name={filtered_records.title} 
                                  stat={filtered_records.data}{filtered_records.measurement} 
                                  thumb={filtered_records.icon}
                              ></RecordItem></div>
                              <div class="recordFix">
                                  <AchievementsButton link="/activity/records" text="View Your Records"></AchievementsButton>
                              </div>
                         </div>

                    {:else if (widgType == "lastrun")}
                         <div class="expandedContent">
                              <div class="pastRunContent">
                                   <div class="dateNTime">
                                        <h6>{filtered_runs.date}</h6>
                                        <h6>{filtered_runs.starttime}</h6>
                                   </div>
                                   <div class="milesNEmotion">
                                        <div class="newMilesContainer">
                                             <h3 class="Fugaz">{filtered_runs.distance}</h3>
                                             <p>Miles</p>
                                        </div>
                                        <img class="faceIcon" src={pulledEmotion} alt="Emotion Icon">
                                   </div>
                                   <div class="otherStats">
                                        <div class="statContainer">
                                             <h5 class="Fugaz">{filtered_runs.pace}</h5>
                                             <p>Avg. Pace</p>
                                        </div>
                                        <div class="statContainer">
                                             <h5 class="Fugaz">{durMinutesFormatted} : {durSecondsFormatted}</h5>
                                             <p>Duration</p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    {/if}
               </div>
          </details>

          <div class="action right">
               <i>
                    <img src={cross} alt="delete"> 
                    Delete
               </i>
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
          padding: 0;
     }

     .swipe-container {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x proximity;
          scrollbar-width: none;
     }

     .swipe-container::-webkit-scrollbar{
          display:none;
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
          background-color: var(--red);
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
          display:flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          margin-left: 1em;
          font-style: normal;
          font-weight: normal;
     }


     i img{
          width: 1.5em;
          height: 1.5em;
          padding-bottom: 1em;
     }

     .homeWidg {  
          display: flex;
          min-width: 100%;
          height: 100px;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-top: 2px solid var(--lavender-200);
          padding: .5em 0 .5em 0;
          color: var(--lavender-700);
          overflow: hidden;
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
          overflow: hidden;
          /* background: var(--Lavender-300, #DFCEFD); */
     }

     .widgContentExpanded {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin: 0px;
          border-radius: 0px;
          position: relative;
          top: -1.5em;
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
          color: var(--lavender-700, #2A2534);
          text-align: center;
          /* Poppins/Bold/Body */
          font-family: "Fugaz One";
          font-size: 23.5px;
          font-style: normal;
          font-weight: normal;
          line-height: normal;
          letter-spacing: 0.8px;
          margin: 0;
     }

     .widgetData {
          /*padding-left: 20px;*/
          color: var(--lavender-700);
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
          /* background-image: url('$lib/assets/fakeMap.png'); */
     }


     details {
          cursor: pointer;
          width: 100%;
          position: relative;
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
     
     .mostRecentAwards {
          display: flex;
          flex-direction: row;
          gap: 20px;
          margin: 0 20px;
     }

     .expandedContent {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 20px;
          margin-bottom: 20px;
     }

     /* Past Run Styling */

     .pastRunContent {
          display: flex;
          flex-direction: column;
          margin: 20px 20px;
          gap: 20px;
     }

     .pastRunContent {
          display: flex;
          flex-direction: column;
          margin: 20px 20px;
          gap: 20px;
          width: 80%;
     }

     .dateNTime {
          display: flex;
          justify-content: space-between;
     }

     .milesNEmotion {
          display: flex;
          justify-content: space-between;
          align-items: center;
     }

     .newMilesContainer {
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          gap: 10px;
     }

     .statContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
     }

     .otherStats {
          display: flex;
          justify-content: space-between
     }

     #result {
          display: flex;
          margin-left: 20px;
          margin-bottom: 20px;
          margin-top: -1;
     }
    
     .recordContainer{
          width: 100%;
     }

</style>