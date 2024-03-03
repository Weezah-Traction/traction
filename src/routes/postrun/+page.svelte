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
        background-color: var(--lavender-100);
        margin: 0;
        padding: 0;
    }

</style>