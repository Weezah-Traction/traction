<script>
	import AllAwards from "../../../lib/AllAwards.svelte";
     import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import LatestAwards from "../../../lib/LatestAwards.svelte";
     import NavigationBar from "$lib/NavigationBar.svelte";
</script>

<slot>
     <HeaderWithBack page="awards"></HeaderWithBack>
     <div class="bodyContent">
          <LatestAwards></LatestAwards>
          <AllAwards></AllAwards>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
</style>