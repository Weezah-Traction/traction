<script>
     let thisPage = "Levels";

     import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import GuidancePageHeader from "$lib/GuidancePageHeader.svelte";
	import NavigationBar from "$lib/NavigationBar.svelte";
     import LevelCard from "$lib/LevelCard.svelte";
     import AllLevelCards from "../../../lib/AllLevelCards.svelte";

     import { levels } from '$lib/data';

     function filter_levels(id) {
     return levels.find((levels) => levels.id === id);
     }

     const filtered_data = filter_levels(2);
     console.log(filtered_data);

</script>

<slot>
     <HeaderWithBack page="levels"></HeaderWithBack>
     <div class="bodyContent">
          <div class="currentLevel">
               <h6 class="levelHeader">Current Level</h6>
			<LevelCard
				levelName = {filtered_data.title}
				currentXP = {filtered_data.currentXP}
				nextXP = {filtered_data.xp}
				streakNum = {filtered_data.streak}
			></LevelCard>
          </div>
          <div class="nextLevels">
               <h6 class="levelHeader">Next Levels</h6>
               <AllLevelCards></AllLevelCards>
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .bodyContent {
          margin: 0;
     }
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