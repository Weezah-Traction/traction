<!-- Long Button -->
<!-- Generally used during the on-baording process to submit information. -->

<script>
    export let type = 'button';
    export let content = 'text'
    export let color = 'highlighted';
    let backgroundColor = 'background-color: var(--lavender-400)'

    if (color == 'highlighted') {
        backgroundColor = 'background-color: var(--lavender-300)';
    }

</script>


<slot>
    <button style="{backgroundColor}" type="{type}">{content}</button>
</slot>

<style>
    button {
        border-radius: 10px;
        width: 100%;
        height: 48px;
        border-style: none;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
    }
</style>