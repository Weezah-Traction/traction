<script>
	import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import NavigationBar from "../../../lib/NavigationBar.svelte";
	import RecordItem from "../../../lib/RecordItem.svelte";

</script>
<slot>
     <HeaderWithBack page="records"></HeaderWithBack>
     <div class="bodyContent">
          <RecordItem name="Farthest Run" stat="1.93 mi"></RecordItem>
          <RecordItem name="Farthest Run" stat="1.93 mi"></RecordItem>
          <RecordItem name="Farthest Run" stat="1.93 mi"></RecordItem>
          <RecordItem name="Farthest Run" stat="1.93 mi"></RecordItem>
          <RecordItem name="Farthest Run" stat="1.93 mi"></RecordItem>
          <RecordItem name="Farthest Run" stat="1.93 mi"></RecordItem>
     </div>
     <NavigationBar></NavigationBar>
</slot>

<style>
     .bodyContent {
          display: flex;
          flex-direction: column;
     }
</style>