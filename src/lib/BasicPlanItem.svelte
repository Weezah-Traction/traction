<script>
	import BasicPlanText from "./BasicPlanText.svelte";
import BasicPlanThumbnail from "./BasicPlanThumbnail.svelte";

</script>
<slot>
    <li>
        <BasicPlanThumbnail></BasicPlanThumbnail>
        <BasicPlanText></BasicPlanText>
    </li>
</slot>

<style>
    li{
        display: flex;
        flex-direction: row;
    }
</style>