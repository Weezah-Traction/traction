<script>
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
	import HeaderWithButton from "../../lib/HeaderWithButton.svelte";
     import PillButton from "../../lib/PillButton.svelte";
     import RunWidget from "../../lib/RunWidget.svelte";

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
               <div class="lav100"><RunWidget widgType = "distance" data = "0.00"></RunWidget></div>
               <div class="lav200"><RunWidget widgType = "pace" data = "0.00"></RunWidget></div>
               <div class="lav100"><RunWidget widgType = "timer" data = "0:00"></RunWidget></div>
               <div class="lav200"><RunWidget widgType = "c25k" data = "WALK"></RunWidget></div>
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
