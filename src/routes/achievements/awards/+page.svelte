<script>
	import AllAwards from "../../../lib/AllAwards.svelte";
import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import LatestAwards from "../../../lib/LatestAwards.svelte";

</script>
<slot>
     <HeaderWithBack page="awards"></HeaderWithBack>
     <div class="bodyContent">
          <LatestAwards></LatestAwards>
          <AllAwards></AllAwards>
     </div>
</slot>

<style>
     .bodyContent {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          padding: 20px 0;
          gap: 20px;
     }
</style>