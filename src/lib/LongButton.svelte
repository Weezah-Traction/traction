<!-- Long Button -->
<!-- Generally used during the on-baording process to submit information. -->

<script>
    export let type = 'button';

</script>


<slot>
    <button type="{type}">Long Button</button>
</slot>

<style>
     a{
        display: flex;
        align-items: center;
        height: 50px;
        justify-content: center;
        padding: 0 1em;
        margin: 1em;
        bottom: 70px;
        left: 0;
        position: fixed;
        right: 0;
        z-index: 1;
        border-radius: 20px;
        border: 3px solid #2D4871;
        background: var(--Lavender-300);

    }
</style>