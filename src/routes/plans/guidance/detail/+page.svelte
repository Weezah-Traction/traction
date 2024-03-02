<script>     
     import HeaderWithBack from "../../../../lib/HeaderWithBack.svelte";
	import DetailContent from "../../../../lib/DetailContent.svelte";
	import NavigationBar from "../../../../lib/NavigationBar.svelte";

</script>

<slot>
     <HeaderWithBack page="detail"></HeaderWithBack>
     <div class="bodyContent">
          <DetailContent></DetailContent>
     </div>
     <NavigationBar></NavigationBar>
</slot>