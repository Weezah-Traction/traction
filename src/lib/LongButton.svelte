<!-- Long Button -->
<!-- Generally used during the on-baording process to submit information. -->

<script>
    export let type = 'button';
    export let content = 'text'
    export let color = 'highlighted';
    let backgroundColor = 'background-color: var(--lavender-400)'

    export let link = "/run"

    if (content == 'No') {
        link = '/run';
    }

    if (content == 'Yes') {
        link = '/postrun';
    }

    if (color == 'highlighted') {
        backgroundColor = 'background-color: var(--lavender-300)';
    }

</script>


<slot>
    <button style="{backgroundColor}" type="{type}"><a href={link}>{content}</a></button>
</slot>

<style>
    a {
        text-decoration: none;
    }

    button {
        color: var(--lavender-700);
        border-radius: 10px;
        width: 100%;
        height: 48px;
        border-style: none;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
    }
</style>