<script>
     export let miles = "0.0";
     export let runs = "0";
     export let avgPace = "0'0";
     export let time = "0:00";
</script>

<slot>
     <div class="activityStats">
          <div class="milesContainer">
               <h3 class="Fugaz">{miles}</h3>
               <p>Miles</p>
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
     </div>
</slot>

<style>
     .activityStats {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 0 20px;
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

</style>