<script>
	import CongratsContent from '../../lib/CongratsContent.svelte';
    import PostrunButtons from '../../lib/PostrunButtons.svelte';
</script>

<slot>
    <div class="bodyContent">
        <CongratsContent></CongratsContent>
        <PostrunButtons page="congrats"></PostrunButtons>
    </div>
</slot>

<style>
    .bodyContent {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

</style>