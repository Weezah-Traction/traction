<script>
	import GuidancePageContentBlock from "./GuidancePageContentBlock.svelte";
</script>

<slot>
     <GuidancePageContentBlock 
          title="Stretches"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
     ></GuidancePageContentBlock>

     <GuidancePageContentBlock 
          title="Hydration"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
     ></GuidancePageContentBlock>

     <GuidancePageContentBlock 
          title="Gear"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
     ></GuidancePageContentBlock>
</slot>