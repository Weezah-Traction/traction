<script>
     import AchievementsFlowerContainer from "$lib/AchievementsFlowerContainer.svelte";
</script>

<slot>
     <div class="allAwards">
          <h6>All Awards</h6>
          <div class="threeFlower">
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
          </div>
          <div class="threeFlower">
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
          </div>
          <div class="threeFlower">
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
          </div>
          <div class="threeFlower">
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
               <AchievementsFlowerContainer
                    name = "Farthest Run"
                    stat = "1.93mi"
               ></AchievementsFlowerContainer>
          </div>
     </div>
</slot>

<style>
     .allAwards {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
     }
     .threeFlower {
		display: flex;
		width: 353px;
		justify-content: space-between;
		align-items: center;
	}
</style>