<script>
	import NavigationBarButton from "./NavigationBarButton.svelte";

    import {page} from '$app/stores'
    let target = $page.url.pathname.substr($page.url.pathname);

    console.log(target)
    
</script>

<slot>
    <nav>
        <ul>
        {#if (target == "/plans/") || (target == "/plans") || (target == "/plans/guidance/") || (target == "/plans/guidance") }
            <NavigationBarButton type="plans" selected="true"></NavigationBarButton>
        {:else}
            <NavigationBarButton type="plans" selected="false"></NavigationBarButton>
        {/if}

        {#if (target == "/")}
            <NavigationBarButton type="home" selected="true"></NavigationBarButton>
        {:else}
            <NavigationBarButton type="home" selected="false"></NavigationBarButton>
        {/if}


        {#if (target == "/activity/") || (target == "/activity")}
            <NavigationBarButton type="activity" selected="true"></NavigationBarButton>
        {:else}
            <NavigationBarButton type="activity" selected="false"></NavigationBarButton>
        {/if}

        </ul>
    </nav>
</slot>

<style>
  

    ul{
        align-items: center;
        background-color: var(--lavender-600);
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        left: 0;
        list-style: none;
        margin: 0;
        padding: 0 .25em .75em;
        position: fixed;
        right: 0;
        z-index: 5;
    }




</style>