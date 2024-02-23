<script>
	import ActivityStats from "../../lib/ActivityStats.svelte";
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
	import PillButton from "../../lib/PillButton.svelte";
	import RunThumbnail from "../../lib/RunThumbnail.svelte";
    import TabToggler from "../../lib/TabToggler.svelte";
	import TimeToggler from "../../lib/TimeToggler.svelte";
</script>

<BlankHeader page="activity"></BlankHeader>

<div class="bodyContent">
    <PillButton link="/achievements" text="Achievements"></PillButton>
    <TabToggler page="activity"></TabToggler>
    <TimeToggler></TimeToggler>
    <ActivityStats></ActivityStats>
    <RunThumbnail
        date = "2/11/24"
        distance = "2.2"
        pace = "5:24"
        emotion = 'vhappy'
    ></RunThumbnail>
    <RunThumbnail
        date = "2/9/24"
        distance = "3.4"
        pace = "4.45"
        emotion = 'vhappy'
    ></RunThumbnail>
</div>

<NavigationBar></NavigationBar>

<style>
    .bodyContent {
         display: flex;
         flex-direction: column;
         padding: 20px 0;
         gap: 20px;
    }
</style>