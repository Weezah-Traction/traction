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
     <div class="container">
     <div class="levelCard">
          <div class="nameNFlower">
               <h4 class="Fugaz">{levelName}</h4>
               <div class="flower">
               <img src={flower} alt="Flower">
               </div>
          </div>
          <div class="levelCardInfo">
               <p>{currentXP} XP</p>
               <progress value="320" max="1320"></progress>
               <div class="nextNStreak">
                    <p>{nextXP} XP to next level</p>
                    <div class="streakContainer">
                         <img class="fireIcon" src={fireIcon} alt="Fire Icon">
                         <p><b>{streakNum}X Streak</b></p>
                    </div>
               </div>
          </div>
     </div>
</div>
</slot>

<style>


     progress{
          width: 100%;
          height: 1em;
          -webkit-appearance: none;
          margin: .25em 0;
          background-color: white;
          border-radius: 1em;
     }


     ::-webkit-progress-bar {
          background-color: white;
          border-radius: 1em;
     }


     ::-webkit-progress-value {
          background-color: var(--level-1-text);
          border-radius: 1em 0 0 1em;
     }


     .container{
          display: flex;
          width: 100%;
     }
     .levelCard {
          display: flex;
          padding: 1em;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--level-1);
          border-radius: var(--standard-radius);
          width: 100%;
          margin: 0 1em;
     }

     .nameNFlower {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          color: var(--level-1-text);
     }

     .levelCardInfo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          width: 100%;
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

     .flower{
          background-color: #ffffff;
          padding: 1em;
          border-radius: 3em;
     }

     .fireIcon{
          height: 1.5em;
     }

</style>