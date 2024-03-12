<script>
     export let link = "/activity/pastrun";
     import mapThumb from '$lib/assets/fakeMap.png';

     let alt;
     let thumb;
     
     export let date = '00/00/0000';
     export let distance = '0.0';
     export let pace = '0.00';
     export let emotion = 'normal';

     import vsadIcon from '$lib/assets/faceIcons/VSadIcon.svg';
     import sadIcon from '$lib/assets/faceIcons/SadIcon.svg';
     import normalIcon from '$lib/assets/faceIcons/NormalIcon.svg';
     import happyIcon from '$lib/assets/faceIcons/HappyIcon.svg';
     import vhappyIcon from '$lib/assets/faceIcons/VHappyIcon.svg';

     if (emotion == 'vsad'){
          thumb = vsadIcon;
          alt = 'Very Sad Icon';
     }

     if (emotion == 'sad'){
          thumb = sadIcon;
          alt = 'Sad Icon';
     }
     
     if (emotion == 'normal'){
          thumb = normalIcon;
          alt = 'Normal Icon';
     }

     if (emotion == 'happy'){
          thumb = happyIcon;
          alt = 'Happy Icon';
     }

     if (emotion == 'vhappy'){
          thumb = vhappyIcon;
          alt = 'Very Happy Icon';
     }

</script>

<slot>
     <a class="runThumbnail" href={link}>
          <div class="mapNInfo">
               <img class="map" src={mapThumb} alt="Map">
               <div class="infoContainer">
                    <h6 class="Poppins">{date}</h6>
                    <p>{distance} mi</p>
                    <p>{pace} min/mi</p>
               </div>
          </div>
          <img class="faceIcon" src={thumb} alt={alt}>
     </a>
</slot>

<style>
     .runThumbnail {
          display: flex;
          justify-content: space-between;
          background-color: #e6f7fe;
          margin: 0 auto;
          width: 340px;
          height: 100px;
          align-items: center;
          gap: 10px;
          padding: .75em;
          margin-bottom: 1em;
          border-radius: 1em;
          /* padding: 8px; */ 
          
          /* ^^^ Had to comment this out for the homescreen widget. 
          Too tired to fix tonight, so I'll just talk about this some other day.
          - Roger */
     }

     .mapNInfo {
          display: flex;
          justify-content: center;
          
     }

     .infoContainer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-left: 16px;
     }

     .faceIcon {
          width: 30px;
          height: 30px;
          padding-right: 20px;
     }

     .map {
          width: 100px;
          height: 100px;
     }
</style>