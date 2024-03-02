<script>
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
	import HeaderWithButton from "../../lib/HeaderWithButton.svelte";

</script>

<slot>
     <HeaderWithButton page="widgets"></HeaderWithButton>
     <div class="bodyContent">
          <TabToggler></TabToggler>
          <MediumWidgetOnOff widgetType = 'totalDist1'></MediumWidgetOnOff>
          <MediumWidgetOnOff widgetType = 'avgPace1'></MediumWidgetOnOff>
     </div>
     <NavigationBar></NavigationBar>
</slot>
