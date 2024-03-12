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
               <h4 class="Fugaz">{levelName}</h4>
               <img class="flower" src={flower} alt="Flower">
          </div>
          <div class="levelCardInfo">
               <p>{currentXP} XP</p>
               <img class="progbar" src={progbar} alt="Progbar">
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
          background: #ffeffe;
          border-radius: 1em;

     }

     .nameNFlower {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          margin: 0 20px;
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