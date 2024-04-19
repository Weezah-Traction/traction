<script>
     export let link;
     export let icon;

     let thumb;
     import blowThumb from '$lib/assets/blowIcon.svg';
     import leafThumb from '$lib/assets/leafIcon.svg';
     import rockonThumb from '$lib/assets/rockonIcon.svg';
     import coffeeThumb from '$lib/assets/coffeeIcon.svg';

     let alt = 'A solid purple block.'
     
     export let desc;
     export let header;

     if (icon == "blow"){
          thumb = blowThumb;
     }
     
     if (icon == "leaf"){
          thumb = leafThumb;
     }
     
     if (icon == "rockon"){
          thumb = rockonThumb;
     }
     
     if (icon == "coffee"){
          thumb = coffeeThumb;
     }

     import GuidanceItemText from "./GuidanceItemText.svelte";
</script>

<slot>
     <div class="guidanceItem">

          <li class=guidanceItemContainer>
               <a href={link}>
                    <img src={thumb} alt={alt}>
                </a>
               <div class="guidanceItemContent">
                    <h6 class="guidanceItemHeader">{header}</h6>
                    <GuidanceItemText desc={desc}></GuidanceItemText>
               </div>
          </li>
     </div>
</slot>

<style>
     a {
          background-color: var(--lavender-500);
          border-radius: var(--standard-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 110px;
          min-width: 110px;
     }

     img{
        grid-column: 2 / span 2;
        width: 30px;
        height: 30px;
        margin-left: 8px 0px 16px 20px;
    }

     li{
          display: flex;
          flex-direction: row;
          grid-column: 2/ span 5;
     }

     .guidanceItem {
          display: flex;
          flex-direction: column;
          /* gap: 10px; */
          margin: 0px 0px 0px 20px
     }

     .guidanceItemHeader {
          /*margin: 0 0 10px 20px;*/
          margin-bottom: 10px;
     }
     
     .guidanceItemContainer {
          display: flex;
          width: 353px;
          height: 150px;
          align-items: center;
          gap: 10px;
     }
</style>