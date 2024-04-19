<script>
	import AllAwards from "../../../lib/AllAwards.svelte";
     import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import LatestAwards from "../../../lib/LatestAwards.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
     import AchievementsFlowerContainer from '$lib/AchievementsFlowerContainer.svelte';

	import { awards } from '$lib/data';

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




     function filter_awards(type) {
          return awards.find((awards) => awards.type === type);
     }

     const filtered_data = filter_awards(1);
     console.log(filtered_data);

</script>

<slot>
     <HeaderWithBack page="awards"></HeaderWithBack>
     <div class="bodyContent">
          <div class="threeAwards">
               <h6>Recent Awards</h6>
               <div class="mostRecentAwards">
                    
                    {#each filtered_awards as {title, xp, icon, date}}
                    <AchievementsFlowerContainer
                         name = {title}
                         xp = {xp}
                         flowerType = {icon}
                         date = {date}
                    ></AchievementsFlowerContainer>
                    {/each}
               </div>
          </div>
          <div class="allAwards">
               <h6>All Awards</h6>
               <div class="allAwardsContainer">
                    {#each awards as {title, xp, icon, date}}
                         <div class="flowerBox">
                              <AchievementsFlowerContainer
                                   name = {title}
                                   xp = {xp}
                                   flowerType = {icon}
                                   date = {date}
                              ></AchievementsFlowerContainer>
                         </div>
                    {/each}
               </div>
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .threeAwards {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0 20px;
     }
     .allAwards {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0 20px;
          padding-top: 30px;
     }
      .mostRecentAwards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 10px;
          grid-row-gap: 20px;
     }
     .allAwardsContainer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-column-gap: 10px;
          grid-row-gap: 10px;
     }
     .flowerBox {
          margin: 10px 0;
     }

</style>