<script>
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
	import HeaderWithButton from "../../lib/HeaderWithButton.svelte";
     import PillButton from "../../lib/PillButton.svelte";

</script>

<slot>
     <HeaderWithButton page="widgets"></HeaderWithButton>
     <div class="bodyContent">
          <!--<TabToggler></TabToggler>-->
          <div class="tempToggler">
               <PillButton link="/widgetshome" text="Home"></PillButton>
               <PillButton link="/widgetsrun" text="Run"></PillButton>
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
