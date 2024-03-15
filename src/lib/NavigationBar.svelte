<script>
	import NavigationBarButton from "./NavigationBarButton.svelte";

    import {page} from '$app/stores'
    let target = $page.url.pathname.substr($page.url.pathname);

    console.log(target)
    
</script>

<slot>
    <nav>
        <ul>
        {#if (target == "/plans/") || (target == "/plans/guidance/")}
            <NavigationBarButton type="plans" selected="true"></NavigationBarButton>
        {:else}
            <NavigationBarButton type="plans" selected="false"></NavigationBarButton>
        {/if}

        {#if (target == "/")}
            <NavigationBarButton type="home" selected="true"></NavigationBarButton>
        {:else}
            <NavigationBarButton type="home" selected="false"></NavigationBarButton>
        {/if}


        {#if (target == "/activity/")}
            <NavigationBarButton type="activity" selected="true"></NavigationBarButton>
        {:else}
            <NavigationBarButton type="activity" selected="false"></NavigationBarButton>
        {/if}

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
        justify-content: space-around;
        left: 0;
        list-style: none;
        padding: 0;
        position: fixed;
        right: 0;
        z-index: 5;
        margin: 0;
    }
</style>