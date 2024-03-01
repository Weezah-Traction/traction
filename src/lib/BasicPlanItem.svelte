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
        padding: 8px 0px 8px 20px;
        margin: 8px 0px 16px 0px;
        
    }

    /* .lav300 {
        background-color:lavender;
    }  */

    
</style>