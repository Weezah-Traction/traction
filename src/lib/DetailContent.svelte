<script>
	import DetailContentBlock from "./DetailContentBlock.svelte";
</script>

<slot>
     <div class="detailContent">
          <DetailContentBlock 
               title="Stretches"
               content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          ></DetailContentBlock>

          <DetailContentBlock 
               title="Hydration"
               content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          ></DetailContentBlock>

          <DetailContentBlock 
               title="Gear"
               content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          ></DetailContentBlock>
     </div>
</slot>

<style>
     .detailContent {
          display: flex;
          flex-direction: column;
          padding: 0 20px;
          gap: 20px;
     }
</style>