<script>
	import TabToggler from "../../lib/TabToggler.svelte";
	import MediumWidgetOnOff from "../../lib/MediumWidgetOnOff.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
	import HeaderWithButton from "../../lib/HeaderWithButton.svelte";
	import PillButton from "../../lib/PillButton.svelte";
     import HomeWidget from "../../lib/HomeWidget.svelte";
     import RunWidget from "../../lib/RunWidget.svelte";


     let state = 'home';
</script>

<slot>
     <HeaderWithButton page="widgets"></HeaderWithButton>
     <TabToggler bind:state></TabToggler>

     {#if (state == 'home')}
          <div class="bodyContent">
               <div class="widgetList">
                    <div class="lav200"><HomeWidget widgType = "awards" status = 'closed' data = "Expand to See More"></HomeWidget></div>
                    <div class="lav100"><HomeWidget widgType = "records" status = 'closed' data = "Expand to See More"></HomeWidget></div>
                    <div class="lav200"><HomeWidget widgType = "lastrun" status = 'closed' data = "2/24/2024"></HomeWidget></div>
               </div>
          </div>
     
     {:else if (state == 'run')}
          <div class="bodyContent">
               <!--<TabToggler></TabToggler>-->
               <div class="widgetList">
                    <div class="lav100"><RunWidget widgType = "distance" data = "0.00"></RunWidget></div>
                    <div class="lav200"><RunWidget widgType = "pace" data = "0.00"></RunWidget></div>
                    <div class="lav100"><RunWidget widgType = "timer" data = "0:00"></RunWidget></div>
                    <div class="lav200"><RunWidget widgType = "c25k" data = "WALK"></RunWidget></div>
               </div>
          </div>
     {/if}

     <NavigationBar></NavigationBar>
</slot>

<style>

</style>
