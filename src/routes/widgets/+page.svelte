<script>
	import Header from "../../lib/Header.svelte";
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";

</script>
<Header page="widget"></Header>
<TabToggler></TabToggler>
<MediumWidgetOnOff widgetType = 'totalDist1'></MediumWidgetOnOff>
<MediumWidgetOnOff widgetType = 'avgPace1'></MediumWidgetOnOff>
<NavigationBar></NavigationBar>
