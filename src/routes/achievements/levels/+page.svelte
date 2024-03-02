<script>
     let thisPage = "Levels";

     import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import GuidancePageHeader from "$lib/GuidancePageHeader.svelte";
	import NavigationBar from "$lib/NavigationBar.svelte";
     import LevelCard from "$lib/LevelCard.svelte";
</script>

<slot>
     <HeaderWithBack page="levels"></HeaderWithBack>
     <div class="bodyContent">
          <div class="currentLevel">
               <h6 class="levelHeader">Current Level</h6>
               <LevelCard
                    levelName = "New Runner"
                    currentXP = "320"
                    nextXP = "680"
                    streakNum = "1"
               ></LevelCard>
          </div>
          <div class="nextLevels">
               <h6 class="levelHeader">Next Levels</h6>
               <LevelCard
                    levelName = "New Runner"
                    currentXP = "320"
                    nextXP = "680"
                    streakNum = "1"
               ></LevelCard>
               <LevelCard
                    levelName = "New Runner"
                    currentXP = "320"
                    nextXP = "680"
                    streakNum = "1"
               ></LevelCard>
               <LevelCard
                    levelName = "New Runner"
                    currentXP = "320"
                    nextXP = "680"
                    streakNum = "1"
               ></LevelCard>
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .currentLevel {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 20px 0 0 0;
     }
     .nextLevels {
          display: flex;
          flex-direction: column;
          gap: 10px;
     }
     .levelHeader {
          margin-left: 20px;
     }
</style>