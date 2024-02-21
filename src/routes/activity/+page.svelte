<script>
	import ActivityStats from "../../lib/ActivityStats.svelte";
import BlankHeader from "../../lib/BlankHeader.svelte";
    import NavigationBar from "../../lib/NavigationBar.svelte";
    import TabToggler from "../../lib/TabToggler.svelte";
</script>

<BlankHeader page="activity"></BlankHeader>

<div class="bodyContent">
    <TabToggler page="activity"></TabToggler>
    <ActivityStats></ActivityStats>
</div>

<NavigationBar></NavigationBar>

<style>
    .bodyContent {
         display: flex;
         flex-direction: column;
         margin: 0 20px;
         padding: 20px 0;
         gap: 20px;
    }
</style>