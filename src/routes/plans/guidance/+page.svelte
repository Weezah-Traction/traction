<script>
     import NavigationBar from "$lib/NavigationBar.svelte";
     import GuidanceItem from "$lib/GuidanceItem.svelte";
	import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
</script>

<slot>
     <HeaderWithBack page="guidance"></HeaderWithBack>
     <div class="bodyContent">
          <div class='guidanceList'>
               <div><GuidanceItem 
                    header="Pre-Run" 
                    desc="Stretches, mindset, and what to eat/drink." 
                    link="/plans/guidance/pre_run"
               ></GuidanceItem></div>
               <div><GuidanceItem 
                    header="During Runs" 
                    desc="Learn the importance of posture and breathing."
                    link="/plans/guidance/during_runs"
               ></GuidanceItem></div>
               <div><GuidanceItem
                    header="After Runs"
                    desc="Cool down and close your runs out with this guide."
                    link="/plans/guidance/after_runs"
               ></GuidanceItem></div>
               <div><GuidanceItem
                    header="General Care"
                    desc="Take care of yourself! This guide will help."
                    link="/plans/guidance/general_care_motivation"
               ></GuidanceItem></div>
          </div>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .bodyContent { 
          margin: 0;
     }
     .guidanceList {
          display: flex;
          flex-direction: column;
          gap: 0;
     
     }
</style>