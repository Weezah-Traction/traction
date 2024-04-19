<script>     
     import HeaderWithBack from "../../../../lib/HeaderWithBack.svelte";
	import DetailContent from "../../../../lib/DetailContent.svelte";
	import NavigationBar from "../../../../lib/NavigationBar.svelte";
	import { onMount } from "svelte";

     export let data;
     const {header, blurb, title1, content1, title2, content2, title3, content3, title4, content4, title5, content5, title6, content6, title7, content7, title8, content8, title9, content9, title10, content10} = data

</script>

<slot>
     <HeaderWithBack page="detail" header={header}></HeaderWithBack>
     <div class="bodyContent">
          <div class="detailContent">
               <p>{blurb}</p>
               <h6>{title1}</h6>
               <p>{content1}</p>
               <h6>{title2}</h6>
               <p>{content2}</p>
               <h6>{title3}</h6>
               <p>{content3}</p>
               <h6>{title4}</h6>
               <p>{content4}</p>
               <h6>{title5}</h6>
               <p>{content5}</p>
               <h6>{title6}</h6>
               <p>{content6}</p>
               <h6>{title7}</h6>
               <p>{content7}</p>
               <h6>{title8}</h6>
               <p>{content8}</p>
               <h6>{title9}</h6>
               <p>{content9}</p>
               <h6>{title10}</h6>
               <p>{content10}</p>
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .detailContent {
          display: flex;
          flex-direction: column;
          padding: 0 16px;
          gap: 16px;
     }


     p {
          padding-bottom: 32px;
     }
</style>