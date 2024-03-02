<script>
     import HeaderWithBack from "../../../lib/HeaderWithBack.svelte";
	import NavigationBar from "../../../lib/NavigationBar.svelte";
	import PastRunContent from "../../../lib/PastRunContent.svelte";
</script>

<slot>
     <HeaderWithBack page="pastrun"></HeaderWithBack>
     <div class="bodyContent">
          <PastRunContent></PastRunContent>
     </div>
     <NavigationBar></NavigationBar>
</slot>



