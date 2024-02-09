<script>
	import MediumWidget from "./MediumWidget.svelte";
	import ToggleSwitch from "./ToggleSwitch.svelte";

     export let widgetType = 'default';
     let name;
     let data;

     if (widgetType == 'default'){
        name = 'Default Widget';
        data = '0.0 mi';
    }

    if (widgetType == 'totalDist1'){
          name = "Total Distance";
          data = '0.0 mi';
    }

    if (widgetType == 'totalDist2'){
          name = "Total Distance";
          data = '2.34 mi';
    }

    if (widgetType == 'avgPace1'){
          name = "Average Pace";
          data = '0.0 mi/min';
    }

    if (widgetType == 'avgPace2'){
          name = "Average Pace";
          data = '4.2 mi/min';
    }

</script>

<slot>
     <div class="mediumWidgetOnOff">
          <MediumWidget widgetType = {widgetType}></MediumWidget>
          <div class="nameAndToggle">
               <h6 class="onOffName">{name}</h6>
               <div><ToggleSwitch></ToggleSwitch></div>
          </div>
     </div>

</slot>

<style>
     .mediumWidgetOnOff {
          display: flex;
          padding: 0px 20px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
     }
     .nameAndToggle {
          width: 353px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
     }

     .onOffName {
          color: #2D4871;
          text-align: center;
          /* Poppins/Bold/H6 */
          font-family: Poppins;
          font-size: 19.2px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 0.96px;
          margin: 0;
     }
</style>