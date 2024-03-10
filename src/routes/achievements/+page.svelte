<script>
	import BlankHeader from "../../lib/BlankHeader.svelte";
	import NavigationBar from "../../lib/NavigationBar.svelte";
	import PillButton from "$lib/PillButton.svelte";
	import TabToggler from "../../lib/TabToggler.svelte";
	import LevelCard from "../../lib/LevelCard.svelte";
	import AchievementsButton from "../../lib/AchievementsButton.svelte";
	import AchievementsFlowerContainer from "../../lib/AchievementsFlowerContainer.svelte";

	import { levels } from '$lib/data';

	function filter_levels(id) {
	return levels.find((levels) => levels.id === id);
	}

	const filtered_data = filter_levels(1);

</script>

<slot>
	<BlankHeader page="achievements"></BlankHeader>
	<PillButton link="/activity" text="Activity"></PillButton>
	<div class="bodyContent">
		<TabToggler page="activity"></TabToggler>
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
</slot>

<NavigationBar></NavigationBar>

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