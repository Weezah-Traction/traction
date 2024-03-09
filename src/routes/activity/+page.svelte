<script>
	import ActivityStats from "../../lib/ActivityStats.svelte";
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
	import PillButton from "../../lib/PillButton.svelte";
	import RunThumbnail from "../../lib/RunThumbnail.svelte";
    import TabToggler from "../../lib/TabToggler.svelte";
	import TimeToggler from "../../lib/TimeToggler.svelte";

    import { runs } from '$lib/data';

</script>

<BlankHeader page="activity"></BlankHeader>

<slot>
    <PillButton link="/achievements" text="Achievements"></PillButton>
    <div class="bodyContent">
        <TabToggler page="activity"></TabToggler>
        <TimeToggler></TimeToggler>
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
    <NavigationBar></NavigationBar>
</slot>

