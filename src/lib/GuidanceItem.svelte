<script>
     export let link;
     import thumb from '$lib/assets/purple.jpg';
     let alt = 'A solid purple block.'
     
     export let desc;
     export let header;

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
     img{
          grid-column: 2 / span 2;
          height: 110px;
          width: 110px;
          border-radius: 1em;
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
          margin: 20px 0px 20px 20px
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