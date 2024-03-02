<script>     
     import HeaderWithBack from "../../../../lib/HeaderWithBack.svelte";
	import GuidancePageContent from "../../../../lib/GuidancePageContent.svelte";
	import NavigationBar from "../../../../lib/NavigationBar.svelte";

</script>

<HeaderWithBack page="detail"></HeaderWithBack>
<div class="bodyContent">
<GuidancePageContent></GuidancePageContent>
</div>

<NavigationBar></NavigationBar>


<style>
     .bodyContent {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          padding: 20px 0;
          gap: 20px;
     }
</style>