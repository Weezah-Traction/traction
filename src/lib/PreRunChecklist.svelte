<script>
    	import { onMount } from 'svelte';
    	import PreRunCheckbox from '$lib/PreRunCheckbox.svelte';

     // Add Up Checkboxes

    onMount(() => {
    const selectedElm = document.getElementById('selected');

    function showChecked(){
        selectedElm.innerHTML = document.querySelectorAll('input[name=prerun]:checked').length;
    }

        document.querySelectorAll("input[name=prerun]").forEach(i=>{
        i.onclick = () => showChecked();
    })});
</script>

<slot>
    <div>
        <!-- <div id="result">Total Number of Items Selected = <span id="selected">0</span></div>   -->
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