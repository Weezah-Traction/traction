<script>     
     import HeaderWithBack from "../../../../lib/HeaderWithBack.svelte";
	import DetailContent from "../../../../lib/DetailContent.svelte";
	import NavigationBar from "../../../../lib/NavigationBar.svelte";
	import { onMount } from "svelte";

     export let data;
     const {header, title1, content1, title2, content2, title3, content3} = data

</script>

<slot>
     <HeaderWithBack page="detail" header={header}></HeaderWithBack>
     <div class="bodyContent">
          <div class="detailContent">
               <h6>{title1}</h6>
               <p>{content1}</p>
               <h6>{title2}</h6>
               <p>{content2}</p>
               <h6>{title3}</h6>
               <p>{content3}</p>
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