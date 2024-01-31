<script>
	import NavigationBarButton from "./NavigationBarButton.svelte";

</script>

<slot>
    <nav>
        <ul>
        <NavigationBarButton type="dog"></NavigationBarButton>
        <NavigationBarButton type="cat"></NavigationBarButton>
        <NavigationBarButton type="dove"></NavigationBarButton>
        </ul>
    </nav>
</slot>

<style>
    ul{
        align-items: center;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        left: 0;
        list-style: none;
        padding: 0;
        position: fixed;
        right: 0;
        z-index: 5;
    }
</style>