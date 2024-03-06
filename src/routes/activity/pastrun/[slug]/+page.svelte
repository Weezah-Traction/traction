<script>
     import CommonProblemsButtonContainer from "$lib/CommonProblemsButtonContainer.svelte";

     import fakeMap from '$lib/assets/fakeMap.png';
     import normalIcon from '$lib/assets/faceIcons/NormalIcon.svg';
     import homeIcon from '$lib/assets/homeWhiteicon.svg';
     import activityIcon from '$lib/assets/activityWhiteicon.svg';

     import HeaderWithBack from "$lib/HeaderWithBack.svelte";
	import NavigationBar from "$lib/NavigationBar.svelte";
	import PastRunContent from "$lib/PastRunContent.svelte";

     export let data;
     const {date, timeOfDay, miles, runs, avgPace, time} = data
</script>

<slot>
     <HeaderWithBack page="pastrun"></HeaderWithBack>
     <div class="bodyContent">
          <div class="pastRunContent">
               <div class="dateNTime">
                    <h6>{date}</h6>
                    <h6>{timeOfDay}</h6>
               </div>
               <div class="milesNEmotion">
                    <div class="milesContainer">
                         <h3 class="Fugaz">{miles}</h3>
                         <p>Miles</p>
                    </div>
                    <img class="faceIcon" src={normalIcon} alt="Normal Icon"> <!--Need to make this change-->
               </div>
               <div class="otherStats">
                    <div class="statContainer">
                         <h5 class="Fugaz">{runs}</h5>
                         <p>Runs</p>
                    </div>
                    <div class="statContainer">
                         <h5 class="Fugaz">{avgPace}</h5>
                         <p>Avg. Pace</p>
                    </div>
                    <div class="statContainer">
                         <h5 class="Fugaz">{time}</h5>
                         <p>Time</p>
                    </div>
               </div>
               <CommonProblemsButtonContainer></CommonProblemsButtonContainer> <!--Need to make this change-->
               <img class="map" src={fakeMap} alt="Map"> <!--Need to make this change-->
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .pastRunContent {
          display: flex;
          flex-direction: column;
          margin: 20px 20px;
          gap: 20px;
     }
     .dateNTime {
          display: flex;
          justify-content: space-between;
     }

     .milesNEmotion {
          display: flex;
          justify-content: space-between;
     }

     .milesContainer {
          display: flex;
          align-items: flex-end;
          gap: 10px;
     }

     .statContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
     }

     .otherStats {
          display: flex;
          justify-content: space-between
     }
     
     .faceIcon {
          width: 30px;
          height: 30px;
     }

     .map {
          width: 100%;
          height: 350px;
     }

</style>
