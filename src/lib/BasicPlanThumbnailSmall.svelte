<script>
    let link = 'plans/guidance';
    import thumb from '$lib/assets/purplesmall.jpg';
    let alt = 'A solid purple block.'
</script>

<slot>
    <a href={link}>
        <img src={thumb} alt={alt}>
    </a>
</slot>

<style>
    img{
        grid-column: 2 ;
        height: 80px;
        border-radius: 1em;
        margin-left: 8px 0px 16px 20px;
    }
</style>