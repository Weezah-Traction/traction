<script>
    import flower from '$lib/assets/flower.svg';

	import PostrunButtons from "../../../lib/PostrunButtons.svelte";
    import LevelCard from "$lib/LevelCard.svelte";
	import LevelUpDayTracker from '../../../lib/LevelUpDayTracker.svelte';

</script>

<slot>
    <div class="bodyContent">
        <div class="levelup">
            <img class="rewardFlower" src={flower} alt="Reward Flower">
            <h1>Woohoo! Level Up!</h1>
            <LevelUpDayTracker></LevelUpDayTracker>
            <LevelCard
                levelName = "New Runner"
                currentXP = "320"
                nextXP = "680"
                streakNum = "1"
            ></LevelCard>
        </div>
        <PostrunButtons page="levelup"></PostrunButtons>
    </div>
</slot>

<style>
    .bodyContent {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .levelup{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6em;
    }

    .rewardFlower {
        width: 150px;
        height: 150px;
    }

    .container-post {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container-post-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    h1{
        font-family: 'Fugaz One';
    }

    .progress-bar {
        width: 100%;
        background-color: #FFE5C6;
        display: flex;
    }
</style>