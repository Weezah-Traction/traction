<script>
     let thisPage = "Run Info";
     let link = "/activity";

     import HeaderImage from "$lib/HeaderImage.svelte";
	import GuidancePageHeader from "../../../lib/GuidancePageHeader.svelte";
	import NavigationBar from "../../../lib/NavigationBar.svelte";
	import PastRunContent from "../../../lib/PastRunContent.svelte";
</script>

<slot>
     <HeaderImage></HeaderImage>
     <div class="bodyContent">
          <GuidancePageHeader page = {thisPage} link = "/activity"></GuidancePageHeader>
          <PastRunContent></PastRunContent>
     </div>
     <NavigationBar></NavigationBar>
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

