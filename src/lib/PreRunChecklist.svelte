<script>
    	import PreRunCheckbox from '$lib/PreRunCheckbox.svelte';
</script>

<slot>
    <div>
        <h2>Pre-Run Checklist</h2>
        <form>
            <PreRunCheckbox></PreRunCheckbox>
            <PreRunCheckbox></PreRunCheckbox>
            <PreRunCheckbox></PreRunCheckbox>
            <PreRunCheckbox></PreRunCheckbox>
        </form>
    </div>
</slot>

<style>
    form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    div{
        text-align: center;
        background-color: var(--lavender-100);
    }

</style>