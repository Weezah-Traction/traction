<script>
    import PreRunCheckbox from '$lib/PreRunCheckbox.svelte';
    import ToggleSwitch from '$lib/ToggleSwitch.svelte';
    let category = 'Default Category';
</script>

<slot>
<div>
    <h3>{category}</h3>
    <form>
        <ToggleSwitch></ToggleSwitch>
        <ToggleSwitch></ToggleSwitch>
        <ToggleSwitch></ToggleSwitch>
        <ToggleSwitch></ToggleSwitch>
        <ToggleSwitch></ToggleSwitch>
        <ToggleSwitch></ToggleSwitch>
    </form>
</div>
</slot>

<style>
form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}


</style>