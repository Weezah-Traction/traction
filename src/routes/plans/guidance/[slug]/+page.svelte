<script>     
     import HeaderWithBack from "../../../../lib/HeaderWithBack.svelte";
	import DetailContent from "../../../../lib/DetailContent.svelte";
	import NavigationBar from "../../../../lib/NavigationBar.svelte";

     export let data;
     const {title, content} = data


</script>

<slot>
     
     <h1>{title}</h1> 
     <h2>{content}</h2>

     <HeaderWithBack page="detail"></HeaderWithBack>
     <div class="bodyContent">
          <DetailContent></DetailContent>
     </div>
     <NavigationBar></NavigationBar>
</slot>