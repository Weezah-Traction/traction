<script>
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
	import HeaderWithButton from "../../lib/HeaderWithButton.svelte";
	import PillButton from "../../lib/PillButton.svelte";
     import HomeWidget from "../../lib/HomeWidget.svelte";

</script>

<slot>
     <HeaderWithButton page="widgets"></HeaderWithButton>
     <div class="bodyContent">
          <!--<TabToggler></TabToggler>-->
          <div class="tempToggler">
               <PillButton link="/widgetshome" text="Home"></PillButton>
               <PillButton link="/widgetsrun" text="Run"></PillButton>
          </div>
          <div class="widgetList">
               <div class="lav200"><HomeWidget widgType = "awards" status = 'closed' data = "Expand to See More"></HomeWidget></div>
               <div class="lav100"><HomeWidget widgType = "records" status = 'closed' data = "Expand to See More"></HomeWidget></div>
               <div class="lav200"><HomeWidget widgType = "lastrun" status = 'closed' data = "2/24/2024"></HomeWidget></div>
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .tempToggler {
          display: flex;
          justify-content: center;
          width: 100%;
     }
</style>
