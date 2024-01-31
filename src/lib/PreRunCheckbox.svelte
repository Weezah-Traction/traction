<script>
    let type = 'cat';
    let title = 'Cat!'
</script>

<slot>
    <div>
        <input type="checkbox" id={type} name={type} />
        <label for={type}>{title}</label>
    </div>
</slot>