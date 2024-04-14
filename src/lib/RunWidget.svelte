<script>
     // import expandIcon from "../../lib/expandIcon.svelte";

     import iconMap from '$lib/assets/widgIcons/mapIcon.svg';
     import iconDist from '$lib/assets/widgIcons/distIcon.svg';
     import iconPace from '$lib/assets/widgIcons/paceIcon.svg';
     import iconTimer from '$lib/assets/widgIcons/timerIcon.svg';
     import iconC25k from '$lib/assets/widgIcons/c25kIcon.svg';
     
     export let status;
     let expanderType;

     export let widgType = "default";
     export let data;
     let end;
     let name;
     let icon;


     if (widgType == "default"){
          name = 'Default Widget';
          icon = iconMap;
          end = "Default Widget";
     }

     if (widgType == "pace"){
          name = 'Current Pace';
          icon = iconPace;
          end = "mi/min";
     }

     if (widgType == "distance"){
          name = 'Distance';
          icon = iconDist;
          end = "mi";
     }

     if (widgType == "timer"){
          name = 'Timer';
          icon = iconTimer;
          end = "";
     }
     
     if (widgType == "c25k"){
          name = 'Couch to 5k';
          icon = iconC25k;
          end = "";
     }

</script>

<slot>
     <div class="homeWidg">
          <div class="widgContent">
               <div class="iconandtext"> 
                    <div class="icon">
                         <img class="iconImg" src={icon} alt="Widget Icon">
                    </div>
                    <p class="widgetName">{name}</p>
               </div>
               <div class="expandIconandtext">
                    <h3 class="widgetData">{data} {end}</h3>
               </div>
          </div>
          <!--<div class="expander">
               <img class='expanderImg' src={expanderType} alt='Expander'>
          </div>-->
     </div>
</slot>

<style>
     .homeWidg {  
          display: flex;
          width: 100%;
          height: 125px;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          border-bottom: 2px solid var(--lavender-200);
          color: var(--lavender-700);
     }

     .widgContent {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          margin: 0px;
          height: 100px;
          /* gap: 10px; */

          border-radius: 0px;
          /* background: var(--Lavender-300, #DFCEFD); */
     }

     .expander {
          display: flex;
          padding-right: 20px;
     }

     .widgetName {
          color: var(--lavender-700);
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
          /*padding-left: 20px;*/
          color: var(--lavender-700);
          text-align: center;
          /* Poppins/H3 */
          font-family: Poppins;
          font-size: 33.18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 1.659px;
          margin: 0;
          
     }

     .iconandtext{
          display: flex;
          flex-direction: row;
          /*margin-left: 20px;*/
          justify-content: start;
          align-items: center;
          gap: 10px;
     }

     .iconImg {
          width: 22px;
          height: 22px;
     }

     .expanderImg {
          width: 28px;
          height: 14px;
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