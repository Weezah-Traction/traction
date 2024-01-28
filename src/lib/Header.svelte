<script>
    export let page = 'home';
    let subheading;
    let header;

    if (page == 'home'){
        subheading = 'Good morning!';
        header = 'Home';
    }

</script>

<slot>
    <p>{subheading}</p>
    <h1>{header}</h1>
</slot>