<script>
	import NavigationBarButton from "./NavigationBarButton.svelte";
    
</script>

<slot>
    <nav>
        <ul>
        <NavigationBarButton type="plans"></NavigationBarButton>
        <NavigationBarButton type="home"></NavigationBarButton>
        <NavigationBarButton type="activity"></NavigationBarButton>
        </ul>
    </nav>
</slot>

<style>
    ul{
        background-color: var(--lavender-600);
        align-items: center;
        bottom: 0;
        display: flex;
        flex-direction: row;
        margin: 0;
        justify-content: space-between;
        left: 0;
        list-style: none;
        padding: 0;
        position: fixed;
        right: 0;
        z-index: 5;
    }
</style>