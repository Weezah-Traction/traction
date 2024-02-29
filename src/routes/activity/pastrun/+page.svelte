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

<style>
     .bodyContent {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
          padding: 20px 0;
          gap: 20px;
     }
</style>

