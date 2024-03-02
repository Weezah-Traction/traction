<script>
 
    export let day = '1';
    export let type = 'plan';

	import BasicPlanText from "./BasicPlanText.svelte";
    import BasicPlanThumbnail from "./BasicPlanThumbnail.svelte";


</script>
<slot>
    <li class="lav300">
        <BasicPlanThumbnail></BasicPlanThumbnail>
        <BasicPlanText type={type} day={day}></BasicPlanText>
    </li>
</slot>

<style>
    li{ 
        display: flex;
        flex-direction: row;
        grid-column: 1/ span 5;
        margin: 0 20px;
        
    }

    /* .lav300 {
        background-color: var(--lavender-100);
    } */

    
</style>