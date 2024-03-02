<script>
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
	import HeaderWithButton from "../../lib/HeaderWithButton.svelte";

</script>

<HeaderWithButton page="widgets"></HeaderWithButton>

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