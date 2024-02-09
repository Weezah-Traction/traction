<script>
    export let page = 'home';

    let text = 'Example';
    let goTo;

    if (page == 'home'){
        text = 'Widget';
        goTo = '/widgets';
    }

    if (page == 'widget'){
        text = 'Done';
        goTo = '/home';
    }
</script>

<slot>
    <a href={goTo}>{text}</a>
</slot>

<style>
    a{
        padding: 1em;
        background-color: var(--lavender-100);
        border-radius: 5em;
        margin: 1em;
    }
</style>