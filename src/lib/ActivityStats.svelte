<script>
     // export let miles = "0.0";
     // export let runs = "0";
     // export let avgPace = "0'0";
     // export let time = "0:00";
     
     import { runs } from '$lib/data';

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


     
     // Get Total Time

     /* Time is expressed in milliseconds. 60000 milliseconds = 1 minute */

     const runs_time = runs.map((i) => i.duration);
     console.log(runs_time);

     let time_sum = 0;
     for (let i = 0; i < runs_time.length; i++) {
     time_sum += runs_time[i];
     }

     console.log(time_sum);

     let time_minutes = (Math.floor((time_sum % (1000 * 60 * time_sum)) / (1000 * 60)));
     let time_seconds = (Math.floor((time_sum% (1000 * 60)) / 1000));

     console.log(time_minutes);
     console.log(time_seconds);

     // console.log(time_combine);


</script>

<slot>
     <div class="activityStats">
          <div class="milesContainer">
               <h3 class="Fugaz">{dist_sum}</h3>
               <p>Miles</p>
          </div>
          <div class="otherStats">
               <div class="statContainer">
                    <h5 class="Fugaz">{runs_dist.length}</h5>
                    <p>Runs</p>
               </div>
               <div class="statContainer">
                    <div class="statBox">
                         <h5 class="Fugaz">{pace_avg}</h5>
                    </div>
                    <p>Avg. Pace</p>
               </div>
               <div class="statContainer">
                    <div class="statBox">
                         <h5 class="Fugaz">{time_minutes}:</h5>
                         <h5 class="Fugaz">{time_seconds}</h5>
                    </div>
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

     .statBox {
          display: flex;
          justify-content: space-between;
     }

     .otherStats {
          display: flex;
          justify-content: space-between
     }

</style>