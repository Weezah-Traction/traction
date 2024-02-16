<script>
	import Header from "$lib/Header.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
     import GuidanceItem from "$lib/GuidanceItem.svelte";
</script>

<Header page="guidance"></Header>
<div class="bodyContent">
     <GuidanceItem 
          header="Pre-Run" 
          desc="Stretches, mindset, and what to eat/drink." 
          link="/plans/guidance/prerun"
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

     <NavigationBar></NavigationBar>
</div>

<style>
     .bodyContent {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          padding: 20px 0;
          gap: 20px;
     }
</style>