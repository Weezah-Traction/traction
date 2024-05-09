<script>
    let link = '/plans/guidance';
    import thumb from '$lib/assets/book.svg';
    let alt = 'A solid purple block.'
</script>

<slot>
    <a href={link}>
        <img src={thumb} alt={alt}>
    </a>
</slot>

<style>

    a{
        background-color: var(--lavender-500);
        border-radius: var(--standard-radius);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 110px;
        width: 110px; 
    }

    img{
        grid-column: 2 / span 2;
        width: 30px;
        height: 30px;

        margin-left: 8px 0px 16px 20px;
        
    }
</style>