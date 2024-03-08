<script>
 
    export let day = '1';
    export let type = 'plan';

	import BasicPlanText from "./BasicPlanText.svelte";
    import BasicPlanThumbnail from "./BasicPlanThumbnail.svelte";


</script>
<slot>
    <li>
        <BasicPlanThumbnail></BasicPlanThumbnail>
        <BasicPlanText type={type} day={day}></BasicPlanText>
    </li>
</slot>

<style>
    li{ 
        display: flex;
        flex-direction: row;
        grid-column: 1/ span 5;
        padding: 10px 0px 10px 20px;
        margin: 10px 0px 20px 0px;
    }    
</style>