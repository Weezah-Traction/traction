<script>
	import ActivityStats from "../../lib/ActivityStats.svelte";
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
	import PillButton from "../../lib/PillButton.svelte";
	import RunThumbnail from "../../lib/RunThumbnail.svelte";
    import TabToggler from "../../lib/TabToggler.svelte";
	import TimeToggler from "../../lib/TimeToggler.svelte";
	import LevelCard from "../../lib/LevelCard.svelte";
	import AchievementsButton from "$lib/AchievementsButton.svelte";
	import AchievementsFlowerContainer from "../../lib/AchievementsFlowerContainer.svelte";
    import RecordItem from "../../lib/RecordItem.svelte";

    import { runs } from '$lib/data';
	import { levels } from '$lib/data';
	import { awards } from '$lib/data';
    import { records } from '$lib/data';

    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><> Awards Functions <><><><><><><>

    const awards_type_one = awards.filter((item) => item.type === 1);
    const awards_dates = awards_type_one.map((i) => i.date)

    // const dates = ['4/4/2023', '2/2/2024', '3/2/2024', '1/1/2024', '12/4/2023'];

    /**
     * This line of code is using the `map` function to transform each element
     * of the `dates` array into a new array called `new_dates`.
     * The callback function is `(date) => new Date(date)`, which takes a date
     * string in the format 'MM/DD/YYYY' and returns a new `Date` object representing that date.
     * `new_dates` is an array of `Date` objects, each representing a date in the `dates` array.
     */
    const new_dates = awards_dates.map((date) => new Date(date));
    console.log(new_dates);

    /**
     * This function takes an array of Date objects, sorts them from most recent to least recent,
     * takes the first three dates, and returns them as strings in the format MM/DD/YYYY.
     *
     * @param {Date[]} dates_array - An array of Date objects.
     * @returns {string[]} An array of the three most recent dates, formatted as strings.
     */
    function get_most_recent_dates(dates_array) {
    return dates_array
        .sort((a, b) => b.getTime() - a.getTime()) //Sort by newest first
        .slice(0, 3) // Get the first 3 items
        .map(
        (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        ); // Format as strings
    }

    const most_recent_dates = get_most_recent_dates(new_dates);
    console.log(most_recent_dates);

    // const filtered_awards_data = awards.filter((item) => item.date === most_recent_dates);
    // console.log(filtered_awards_data);

    // const filtered_awards_data = awards.filter((item) => {
    //     console.log(item);
    //     console.log(item.date);
    //     console.log(most_recent_dates);
    //     return item.date === most_recent_dates
    // });

    function filter_by_most_recent_dates(awards, most_recent_dates) {
        return awards.filter((award) => most_recent_dates.includes(award.date));
    }

    const filtered_awards = filter_by_most_recent_dates(awards, most_recent_dates);
    console.log(filtered_awards);


    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><> Levels Functions <><><><><><><>

	function filter_levels(id) {
	return levels.find((levels) => levels.id === id);
	}

	const filtered_levels = filter_levels(1);

    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><> Records Functions <><><><><><><>

	function filter_records(id) {
	return records.find((records) => records.id === id);
	}

	const filtered_records = filter_records(1);



    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><><><><><><><><><><><><><><><><><>
    // <><><><><><><> For Toggler <><><><><><><>

    let state = 'activity';

</script>

<BlankHeader page="activity"></BlankHeader>

<slot>
    <!-- <PillButton link="/achievements" text="Achievements"></PillButton> -->

    <TabToggler page="activity" bind:state></TabToggler>

        {#if (state == 'activity')}
            <div id="activity">
                <div class="bodyContent">
                    <ActivityStats></ActivityStats>
                    {#each runs as {id, date, distance, pace, emotion }}
                        <RunThumbnail
                            date = {date}
                            distance = {distance}
                            pace = {pace}
                            emotion = {emotion}
                            link = '/activity/pastrun/?id={id}'
                        ></RunThumbnail>
                    {/each}
                </div>
            </div>
        {:else if (state == 'achievements')}
            <div id="achievements">
                <div class="bodyContent">
                    <div class="levelSection">
                        <h6 class="runlvl">Run Level</h6>
                        <LevelCard
                            levelName = {filtered_levels.title}
                            currentXP = {filtered_levels.currentXP}
                            nextXP = {filtered_levels.xp}
                            streakNum = {filtered_levels.streak}
                        ></LevelCard>
                        <AchievementsButton link="/activity/levels/" text="View All Run Levels"></AchievementsButton>
                    </div>
                    <div class="recordSection">
                        <h6 class="recordFix">Records</h6>
                        <div class="recordContainer"><RecordItem 
                            name={filtered_records.title} 
                            stat={filtered_records.data}{filtered_records.measurement} 
                            flowerType={filtered_records.icon}
                        ></RecordItem></div>
                        <AchievementsButton link="/activity/records/" text="View Your Records"></AchievementsButton>

                    </div>
                    <div class="otherSections">
                        <h6>Awards</h6>
                        <div class="threeFlower">
                            {#each filtered_awards as {title, xp, icon, date}}
                                <AchievementsFlowerContainer
                                    name = {title}
                                    xp = {xp}
                                    flowerType = {icon}
                                    date = {date}
                                ></AchievementsFlowerContainer>
                            {/each}
                        </div>
                        <AchievementsButton link="activity/awards/" text="View All Awards"></AchievementsButton>
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
		align-items: flex-start;
		gap: 1em;
	}

    .recordSection {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: .75em;
		margin-top: 20px;
        margin-bottom: 10px;
	}

    .recordFix {
        margin-left: 20px;
	}

    .recordContainer {
        width: 100%;
    }

	.otherSections {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1em;
        margin: 0 20px;
	}

	.threeFlower {
		width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 20px;
        /* margin: .25em 1em; */
	}

    .runlvl {
        margin: 10px 0px 0px 20px;
    }

</style>