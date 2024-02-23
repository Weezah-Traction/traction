<script>
 
    export let day = '1';
    export let type = 'plan';

	import BasicPlanText from "./BasicPlanText.svelte";
    import BasicPlanThumbnailSmall from "./BasicPlanThumbnailSmall.svelte";

</script>
<slot>
    <li>
        <BasicPlanThumbnailSmall></BasicPlanThumbnailSmall>
        <BasicPlanText type={type} day={day}></BasicPlanText>
    </li>
</slot>

<style>
    li{ 
        display: flex;
        flex-direction: row;
        grid-column: 1/ span 5;
        margin: 8px 0px 8px 20px;
        
    }

    
</style>