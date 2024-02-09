<script>
    export let page = 'home';

    let text = 'Example'

    if (page == 'home'){
        let text = 'Go Home';
    }
</script>

<slot>
    <a href="/home">{text}</a>
</slot>

<style>
    a{
        padding: 1em;
        background-color: var(--lavender-100);
        border-radius: 5em;
        margin: 1em;
    }
</style>