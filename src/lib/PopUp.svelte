<script>
	import PillButton from "./PillButton.svelte";
    let title = 'Default';
    import src from '$lib/assets/purple.jpg';
    let alt = 'purple.';
    let text = 'This is an example phrase to see if the modal works.'

</script>
<slot>
    <div>
        <h2>{title}</h2>
        <img {src} {alt} />
        <p>{text}</p>
        <PillButton></PillButton>
    </div>
</slot>

<style>

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--lavender-100);
    }

    img{
        width: 10em;
    }
</style>