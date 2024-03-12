<script>
	import ActivityStats from "../../lib/ActivityStats.svelte";
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
	import PillButton from "../../lib/PillButton.svelte";
	import RunThumbnail from "../../lib/RunThumbnail.svelte";
    import TabToggler from "../../lib/TabToggler.svelte";
	import TimeToggler from "../../lib/TimeToggler.svelte";
    import { runs } from '$lib/data';

 
	
	import LevelCard from "../../lib/LevelCard.svelte";
	import AchievementsButton from "../../lib/AchievementsButton.svelte";
	import AchievementsFlowerContainer from "../../lib/AchievementsFlowerContainer.svelte";

	import { levels } from '$lib/data';

	function filter_levels(id) {
	return levels.find((levels) => levels.id === id);
	}

	const filtered_data = filter_levels(1);


    let state = 'activity';


</script>

<BlankHeader page="activity"></BlankHeader>

<slot>
    <!-- <PillButton link="/achievements" text="Achievements"></PillButton> -->

    <TabToggler page="activity" bind:state></TabToggler>

        {#if (state == 'activity')}
            <div id="activity">
                <TimeToggler></TimeToggler>
                <div class="bodyContent">
                    <ActivityStats></ActivityStats>
                    {#each runs as {id, date, distance, pace, emotion }}
                        <RunThumbnail
                            date = {date}
                            distance = {distance}
                            pace = {pace}
                            emotion = {emotion}
                            link = '/activity/pastrun/run{id}'
                        ></RunThumbnail>
                    {/each}
                </div>
            </div>
        {:else if (state == 'achievements')}
            <div id="achievements">
                <div class="bodyContent">
                    <div class="levelSection">
                        <LevelCard
                            levelName = {filtered_data.title}
                            currentXP = {filtered_data.currentXP}
                            nextXP = {filtered_data.xp}
                            streakNum = {filtered_data.streak}
                        ></LevelCard>
                        <AchievementsButton link="/achievements/levels" text="View All Run Levels"></AchievementsButton>
                    </div>
                    <div class="otherSections">
                        <h6>Personal Records</h6>
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
                        <AchievementsButton link="/achievements/records" text="View Your Records"></AchievementsButton>
                    </div>
                    <div class="otherSections">
                        <h6>Awards Badges</h6>
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
                        <AchievementsButton link="/achievements/awards" text="View All Awards"></AchievementsButton>
                    </div>
                </div>
            </div>
        {/if}


    <NavigationBar></NavigationBar>
</slot>

<style>
    	.levelSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.otherSections {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
		margin: 20px 0 10px 20px;
	}

	.threeFlower {
		display: flex;
		width: 353px;
		justify-content: space-between;
		align-items: center;
	}
</style>