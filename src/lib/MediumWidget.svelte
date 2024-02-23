<script>
      // import expandIcon from "../../lib/expandIcon.svelte";
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

    if (widgetType == 'map'){
          name = "Total Distance";
          data = '0.0 mi';
    }

    if (widgetType == 'totalDist2'){
          name = "Total Distance";
          data = '2.34 mi';
    }

    if (widgetType == 'avgPace1'){
          name = "Average Pace";
          data = '0.0 min/mile';
    }

    if (widgetType == 'avgPace2'){
          name = "Average Pace";
          data = '12.2 min/mile';
    }
    
    
    if (widgetType == 'Fastest Run'){
          name = "Fastest Run";
          data = '4.2 mi/min';
    }

    if (widgetType == 'currentPace'){
          name = "Current Pace";
          data = '10.2 mi/min';
    }

    if (widgetType == 'distanceCovered'){
          name = "Distance Covered";
          data = '2.1 miles';
    }
    if (widgetType == 'elevationGain'){
          name = "Elevation Gain";
          data = '453 ft';
    }

    if (widgetType == 'time'){
          name = "Total Run Time";
          data = '22:36';
    }

</script>

<slot>
     <div class="MediumWidg">

         <div class="iconandtext"> 
            <div class="icon"></div>
             <p class="widgetName">{name}</p>
       </div>
          
       <br>

          <div class="expandIconandtext">
            <h4 class="widgetData">{data}</h4>
            <div class="expandIcon"></div>
      </div>
          
     </div>
</slot>

<style>
     .MediumWidg {  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
          /* flex-direction: column; */
          /* justify-content:flex-start; */
          /* align-items: left; */
          width: 100%;
          margin: 0px  ;
          height: 100px;
          /* gap: 10px; */

          border-radius: 0px;
          /* background: var(--Lavender-300, #DFCEFD); */

     }

     .widgetName {
      
     padding-left: 8px;
          color: var(--Lavender-700, #2A2534);
          text-align: center;
          /* Poppins/Bold/Body */
          font-family: "Fugaz One";
          font-size: 23.5px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 0.8px;
          margin: 0;
     }

     .widgetData {
      padding-left: 20px;
          color: var(--Lavender-700, #2A2534);
          text-align: center;
          /* Fugaz/H4 */
          font-family: Poppins;
          font-size: 19.2px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.382px;
          margin: 0;
     }

     .iconandtext{
      display: flex;
      flex-direction: row;
      margin-left: 20px;
      justify-content: start;
      align-items: center;
     }

     .icon {
      width: 22px;
      height: 22px;
      background-color: black;
     }

     /* .expandIcon {
      display: flex;
      flex-direction: row;
      align-self: flex-end;
      
      background-color: wheat;
      width: 22px;
      height: 22px;
      margin-right: 20px;
      /* margin-bottom: 20px; */
      
     
</style>