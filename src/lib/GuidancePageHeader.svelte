<script>
	import PillButton from "./PillButton.svelte";
     export let link = "/plans/guidance";
     export let page = "Undefined";
</script>

<slot>
     <div class="guidancePageHeader">
          <h3 class="Fugaz">{page}</h3>
          <PillButton link={link} text="Back"></PillButton>
     </div>
</slot>

<style>
     .guidancePageHeader {
          display: flex;
          justify-content: space-between;
     }
</style>