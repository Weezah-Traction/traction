<script>
        import BasicPlanItem from '$lib/BasicPlanItem.svelte';
</script>

<slot>
    <ul>
        <BasicPlanItem></BasicPlanItem>
        <BasicPlanItem></BasicPlanItem>
        <BasicPlanItem></BasicPlanItem>
    </ul>
</slot>