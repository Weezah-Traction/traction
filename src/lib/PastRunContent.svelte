<script>
     import CommonProblemsButtonContainer from "$lib/CommonProblemsButtonContainer.svelte";

     import fakeMap from '$lib/assets/fakeMap.png';
     import normalIcon from '$lib/assets/faceIcons/NormalIcon.svg';
     import homeIcon from '$lib/assets/homeWhiteicon.svg';
     import activityIcon from '$lib/assets/activityWhiteicon.svg';

     export let date = "January 1st, 2024";
     export let timeOfDay = "10:30pm";

     export let miles = "0.0";
     export let runs = "0";
     export let avgPace = "0'0";
     export let time = "0:00";

</script>

<slot>
     <div class="pastRunContent">
          <div class="dateNTime">
               <h6>{date}</h6>
               <h6>{timeOfDay}</h6>
          </div>
          <div class="milesNEmotion">
               <div class="milesContainer">
                    <h3 class="Fugaz">{miles}</h3>
                    <p>Miles</p>
               </div>
               <img class="faceIcon" src={normalIcon} alt="Normal Icon">
          </div>
          <div class="otherStats">
               <div class="statContainer">
                    <h5 class="Fugaz">{runs}</h5>
                    <p>Runs</p>
               </div>
               <div class="statContainer">
                    <h5 class="Fugaz">{avgPace}</h5>
                    <p>Avg. Pace</p>
               </div>
               <div class="statContainer">
                    <h5 class="Fugaz">{time}</h5>
                    <p>Time</p>
               </div>
          </div>
          <CommonProblemsButtonContainer></CommonProblemsButtonContainer>
          <img class="map" src={fakeMap} alt="Map">
     </div>
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