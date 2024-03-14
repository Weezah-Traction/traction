<script>
	import AllAwards from "../../../lib/AllAwards.svelte";
     import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import LatestAwards from "../../../lib/LatestAwards.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
     import AchievementsFlowerContainer from '$lib/AchievementsFlowerContainer.svelte';

     import { awards } from '$lib/data';

     function filter_awards(type) {
          return awards.find((awards) => awards.type === type);
     }

     const filtered_data = filter_awards(1);
     console.log(filtered_data);

</script>

<slot>
     <HeaderWithBack page="awards"></HeaderWithBack>
     <div class="bodyContent">
          <LatestAwards></LatestAwards>
          <div class="allAwards">
               <h6>All Awards</h6>
               <div class="allAwardsContainer">
                    {#each awards as {title, xp, icon}}
                         <AchievementsFlowerContainer
                              name = {title}
                              xp = {xp}
                              thumb = {icon}
                         ></AchievementsFlowerContainer>
                    {/each}
               </div>
          </div>
          <!-- <div class="threeFlower">
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
          </div> -->
     <NavigationBar></NavigationBar>
</slot>

<style>
     .allAwards { 
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0 20px;
          padding-top: 30px;
     }
     .allAwardsContainer {
          display: grid;
          grid-template-columns: 33% 33% 33%;
          grid-row-gap: 20px;
     }

</style>