<script>
	import DetailContentBlock from "./DetailContentBlock.svelte";
</script>

<slot>
     <div class="detailContent">
          <h6>{title}</h6>
          <p>{content}</p>
          <h6>{title}</h6>
          <p>{content}</p>
          <h6>{title}</h6>
          <p>{content}</p>
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