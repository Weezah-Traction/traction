<script>
	import Header from "../../lib/Header.svelte";
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";

</script>
<Header page="widget"></Header>
<div class="bodyContent">
     <TabToggler></TabToggler>
     <MediumWidgetOnOff widgetType = 'totalDist1'></MediumWidgetOnOff>
     <MediumWidgetOnOff widgetType = 'avgPace1'></MediumWidgetOnOff>
     <NavigationBar></NavigationBar>
</div>

<style>
     .bodyContent {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          padding: 20px 0;
          gap: 20px;
     }
</style>