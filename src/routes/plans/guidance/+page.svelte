<script>
	import Header from "$lib/Header.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
     import GuidanceItem from "$lib/GuidanceItem.svelte";
</script>

<Header page="guidance"></Header>
<div class="bodyContent">
    
  <div class="l100" >  <GuidanceItem 
          header="Pre-Run" 
          desc="Stretches, mindset, and what to eat/drink." 
          link="/plans/guidance/prerun"
     ></GuidanceItem> </div> 
     
     <div class="l300">
     <GuidanceItem 
          header="During Runs" 
          desc="Learn the importance of proper posture and breathing tech."
     ></GuidanceItem>
     </div>

    <div class="l100"> <GuidanceItem
          header="After Runs"
          desc="Cool down and close your runs out with this guide."
     ></GuidanceItem>
</div>

   <div class="l300">  <GuidanceItem
          header="General Care & Motivation"
          desc="Take care of yourself! This guide will help."
     ></GuidanceItem>
</div>


     <NavigationBar></NavigationBar>
</div>

<style>
     .bodyContent {
          display: flex;
          flex-direction: column;
          margin: 0 0px;
          padding: 0px 0px 0px 0px;
          gap: 0px;
     }

     .l300 {
    background-color: #DFCEFD;
     } 

     .l100 {
    background-color: #F9F6FF;
     } 

</style>