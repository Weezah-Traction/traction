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
          <h6 class="guidanceItemHeader">{header}</h6>
          <li class=guidanceItemContent>
               <a href={link}>
                    <img src={thumb} alt={alt}>
                </a>
               <GuidanceItemText desc={desc}></GuidanceItemText>
          </li>
     </div>
 </slot>
 
 <style>
     img{
         grid-column: 2 / span 2;
         height: 100px;
         border-radius: 1em;
     }
     li{
         display: flex;
         flex-direction: row;
         grid-column: 2/ span 5;
         margin-top: 10px;
     }
 
     .guidanceItem {
          display: flex;
          flex-direction: column;
          gap: 10px;
     }
     .guidanceItemHeader {

     }
     
     .guidanceItemContent {
          display: flex;
          width: 353px;
          align-items: center;
          gap: 10px;
     }
 </style>