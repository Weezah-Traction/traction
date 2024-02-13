<script>
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
     <div class="MediumWidg">
          <p class="widgetName">{name}</p>
          <h4 class="widgetData">{data}</h4>
     </div>
</slot>

<style>
     .MediumWidg {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 353px;
          padding: 10px 0;
          gap: 10px;

          border-radius: 22px;
          background: var(--Lavender-300, #DFCEFD);

     }

     .widgetName {
          color: var(--Lavender-700, #2A2534);
          text-align: center;
          /* Poppins/Bold/Body */
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 0.8px;
          margin: 0;
     }

     .widgetData {
          color: var(--Lavender-700, #2A2534);
          text-align: center;
          /* Fugaz/H4 */
          font-family: "Fugaz One";
          font-size: 27.65px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.382px;
          margin: 0;
     }
</style>