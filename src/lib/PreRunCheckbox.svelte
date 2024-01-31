<script>
    let type = 'cat';
    let title = 'Cat!'
</script>

<slot>
    <input type="checkbox" id={type} name={type} />
    <label for={type}>{title}</label>
</slot>