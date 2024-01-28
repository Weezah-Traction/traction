<script>
	import NavigationBarButton from "./NavigationBarButton.svelte";

</script>

<slot>
    <nav>
        <NavigationBarButton type="dog"></NavigationBarButton>
        <NavigationBarButton type="cat"></NavigationBarButton>
        <NavigationBarButton type="dove"></NavigationBarButton>
    </nav>
</slot>

<style>
    nav{
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 5;
        position: fixed;
    }
</style>