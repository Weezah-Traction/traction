<script>
    let link = 'link';
    import thumb from '$lib/assets/purple.jpg';
    let alt = 'A solid purple block.'
</script>

<slot>
    <a href={link}>
        <img src={thumb} alt={alt}>
    </a>
</slot>

<style>
    img{
        width: 5em;
    }
</style>