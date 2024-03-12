<script>
    	import PreRunCheckbox from '$lib/PreRunCheckbox.svelte';
</script>

<slot>
    <div>
        <form>
            <PreRunCheckbox title="Hydrate: Drink some water!"></PreRunCheckbox>
            <PreRunCheckbox title="Stretch: Stretch your legs!"></PreRunCheckbox>
            <PreRunCheckbox title="Gear: Get geared up!"></PreRunCheckbox>
            <PreRunCheckbox title="Fuel: Have a healthy snack!"></PreRunCheckbox>
        </form>
    </div>
</slot>

<style>
    div{
        padding-left: 20px;
    }

</style>