<!-- Long Button -->
<!-- Generally used during the on-boarding process to submit information. -->

<script>
    export let type = 'button';

</script>


<slot>
    <button type="{type}">Long Button</button>
</slot>

<style>
    button{
        padding: 1em;
        border-radius: 1em;
        width: 100%;
    }
</style>