<script>
        import BasicPlanItem from '$lib/BasicPlanItem.svelte';
</script>

<slot>
    <ul>
        <BasicPlanItem day="1"></BasicPlanItem>
        <BasicPlanItem day="2"></BasicPlanItem>
        <BasicPlanItem day="3"></BasicPlanItem>
    </ul>
</slot>