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
        align-items: center;
    }
</style>