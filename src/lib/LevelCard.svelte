<script>
     import fireIcon from '$lib/assets/fireIcon.svg';
     import progbar from '$lib/assets/progbar.svg';
     import flower from '$lib/assets/flower.svg';

     //export let level = "1"
     export let levelName = "Level Name";
     export let currentXP = "0";
     export let nextXP = "0";
     export let streakNum = "0";

</script>

<slot>
     <div class="levelCard">
          <div class="nameNFlower">
               <h5 class="Fugaz">{levelName}</h5>
               <div class="flower-container">
                    <img class="flower" src={flower} alt="Flower">
               </div>
          </div>
          <div class="levelCardInfo">
               <p>{currentXP} XP</p>
               <!-- <img class="progbar" src={progbar} alt="Progbar"> -->
               <progress value="20" max="50"></progress>
               <div class="nextNStreak">
                    <p>{nextXP} XP to next level</p>
                    <div class="streakContainer">
                         <img class="fireIcon" src={fireIcon} alt="Fire Icon">
                         <p><b>{streakNum}X Streak</b></p>
                    </div>
               </div>
          </div>
     </div>
</slot>

<style>
     .levelCard {
          display: flex;
          margin: 0 auto;
          padding: .75em;
          height: 150px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fff3eb;
          color: var(--lavender-700);
          border-radius: 1em;
          margin-bottom: 1em;
          margin-top: -1em;

     }

     progress{
          -webkit-appearance: none;
          width: 340px;
          background: rgb(255, 255, 255);
          border-radius: 2em;
          /* border: 2px solid var(--lavender-500); */
     }

     ::-webkit-progress-bar {
          background-color: rgb(255, 255, 255);
          border-radius: 2em;
     }

     ::-webkit-progress-value {
          background-color: var(--lavender-700);
          border-radius: 2em;

     }

     .flower-container{
          background-color: white;
          border-radius: 1em;
          display: flex;
          padding: .75em;
          align-items: center;
          justify-content: center;

     }

     .nameNFlower {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
     }

     .levelCardInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
     }

     .nextNStreak {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
     }

     .streakContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 5px;
     }
</style>