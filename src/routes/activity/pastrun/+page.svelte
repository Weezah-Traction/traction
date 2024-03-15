<script>
     import CommonProblemsButtonContainer from "$lib/CommonProblemsButtonContainer.svelte";

import fakeMap from '$lib/assets/fakeMap.png';

import vhappyIcon from '$lib/assets/faceIcons/VHappyIcon.svg';
import happyIcon from '$lib/assets/faceIcons/HappyIcon.svg';
import normalIcon from '$lib/assets/faceIcons/NormalIcon.svg';
import sadIcon from '$lib/assets/faceIcons/SadIcon.svg';
import vsadIcon from '$lib/assets/faceIcons/VSadIcon.svg';

import homeIcon from '$lib/assets/homeWhiteicon.svg';
import activityIcon from '$lib/assets/activityWhiteicon.svg';

import HeaderWithBack from "$lib/HeaderWithBack.svelte";
import NavigationBar from "$lib/NavigationBar.svelte";
import PastRunContent from "$lib/PastRunContent.svelte";

import { page } from '$app/stores';
import { runs } from '$lib/data';

function filter_runs(id) {
return runs.find((runs) => runs.id === Number(id));
}

const filtered_data = filter_runs($page.data.id);


let pulledEmotion;

if (filtered_data.emotion == 'vsad'){
     pulledEmotion = vsadIcon;
}

if (filtered_data.emotion == 'sad'){
     pulledEmotion = sadIcon;
}

if (filtered_data.emotion == 'normal'){
     pulledEmotion = normalIcon;
}

if (filtered_data.emotion == 'happy'){
     pulledEmotion = happyIcon;
}

if (filtered_data.emotion == 'vhappy'){
     pulledEmotion = vhappyIcon;
}

    // For Making distance look right
    let durMinutes = (Math.floor((filtered_data.duration % (1000 * 60 * filtered_data.duration)) / (1000 * 60)));
    let durSeconds = (Math.floor((filtered_data.duration % (1000 * 60)) / 1000));

    let durMinutesFormatted = durMinutes.toLocaleString('en-US');
     let durSecondsFormatted = durSeconds.toLocaleString('en-US' , {minimumIntegerDigits: 2});

     //    timeReported = formattedMinutes + ":" + formattedSeconds;


</script>

<slot>
     <HeaderWithBack page="pastrun"></HeaderWithBack>
     <div class="bodyContent">
          <div class="pastRunContent">
               <div class="dateNTime">
                    <h6>{filtered_data.date}</h6>
                    <h6>{filtered_data.starttime}</h6>
               </div>
               <div class="milesNEmotion">
                    <div class="milesContainer">
                         <h3 class="Fugaz">{filtered_data.distance}</h3>
                         <p>Miles</p>
                    </div>
                    <img class="faceIcon" src={pulledEmotion} alt="Emotion Icon">
               </div>
               <div class="otherStats">
                    <div class="statContainer">
                         <h5 class="Fugaz">{filtered_data.pace}</h5>
                         <p>Avg. Pace</p>
                    </div>
                    <div class="statContainer">
                         <h5 class="Fugaz">{durMinutesFormatted} : {durSecondsFormatted}</h5>
                         <p>Duration</p>
                    </div>
               </div>
               <CommonProblemsButtonContainer></CommonProblemsButtonContainer> 
               <img class="map" src={fakeMap} alt="Map">
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .pastRunContent {
          display: flex;
          flex-direction: column;
          margin: 20px 20px;
          gap: 20px;
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

     .milesContainer {
          display: flex;
          align-items: flex-end;
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
     
     .faceIcon {
          width: 30px;
          height: 30px;
     }

     .map {
          width: 100%;
          height: 350px;
     }

</style>

