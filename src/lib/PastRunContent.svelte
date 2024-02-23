<script>
     import CommonProblemsButtonContainer from "$lib/CommonProblemsButtonContainer.svelte";

     export let date = "January 1st, 2024";
     export let timeOfDay = "10:30pm";

     export let miles = "0.0";
     export let runs = "0";
     export let avgPace = "0'0";
     export let time = "0:00";

</script>

<slot>
     <div class="dateNTime">
          <h6>{date}</h6>
          <h6>{timeOfDay}</h6>
     </div>
     <div class="milesNEmotion">
          <div class="milesContainer">
               <h3 class="Fugaz">{miles}</h3>
               <p>Miles</p>
          </div>
          <img class="faceIcon" src='$lib/assets/faceIcons/NormalIcon.svg' alt="Normal Icon">
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
     <img class="map" src='$lib/assets/faceIcons/fakeMap.png' alt="Map">
</slot>

<style>
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
          width: 300px;
          height: 350px;
     }

</style>