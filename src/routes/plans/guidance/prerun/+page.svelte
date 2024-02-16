<script>
     let thisPage = "Prerun";
     
	import GuidancePageContent from "../../../../lib/GuidancePageContent.svelte";
	import GuidancePageHeader from "../../../../lib/GuidancePageHeader.svelte";
	import HeaderImage from "../../../../lib/HeaderImage.svelte";
	import NavigationBar from "../../../../lib/NavigationBar.svelte";

</script>

<HeaderImage></HeaderImage>
<div class="bodyContent">
<GuidancePageHeader page = {thisPage}></GuidancePageHeader>
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