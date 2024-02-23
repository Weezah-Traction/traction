<script>
     let thisPage = "Levels";

     import HeaderImage from "$lib/HeaderImage.svelte";
	import GuidancePageHeader from "$lib/GuidancePageHeader.svelte";
	import NavigationBar from "$lib/NavigationBar.svelte";
     import LevelCard from "$lib/LevelCard.svelte";
</script>

<slot>
     <HeaderImage></HeaderImage>
     <div class="levelsContent">
          <div class="headerContainer">
               <GuidancePageHeader page = {thisPage} link = "/achievements"></GuidancePageHeader>
          </div>
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
     .levelsContent {
          display: flex;
          flex-direction: column;
          gap: 20px;
     }
     .headerContainer {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          padding: 20px 0;
     }
     .currentLevel {
          display: flex;
          flex-direction: column;
          gap: 10px;
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