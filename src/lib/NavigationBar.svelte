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
    }
</style>