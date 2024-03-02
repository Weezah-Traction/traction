<script>
     import NavigationBar from "$lib/NavigationBar.svelte";
     import GuidanceItem from "$lib/GuidanceItem.svelte";
	import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
</script>

<slot>
     <HeaderWithBack page="guidance"></HeaderWithBack>
     <div class="bodyContent">
          <GuidanceItem 
               header="Pre-Run" 
               desc="Stretches, mindset, and what to eat/drink." 
               link="/plans/guidance/detail"
          ></GuidanceItem>
          <GuidanceItem 
               header="During Runs" 
               desc="Learn the importance of proper posture and breathing tech."
          ></GuidanceItem>
          <GuidanceItem
               header="After Runs"
               desc="Cool down and close your runs out with this guide."
          ></GuidanceItem>
          <GuidanceItem
               header="General Care & Motivation"
               desc="Take care of yourself! This guide will help."
          ></GuidanceItem>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>

</style>