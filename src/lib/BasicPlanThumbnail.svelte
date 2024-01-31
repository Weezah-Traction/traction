<script>
    let link = 'link'
    let thumb = '$lib/assets/testPurple.jpg';
    let alt = 'A solid purple block.'
</script>

<slot>
    <a href={link}>
        <img alt={alt} src={thumb}>
    </a>
</slot>