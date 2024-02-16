<script>
        import BasicPlanItem from '$lib/BasicPlanItem.svelte';
</script>

<slot>
    <ul class="planList">
        <BasicPlanItem day="1"></BasicPlanItem>
        <BasicPlanItem day="2"></BasicPlanItem>
        <BasicPlanItem day="3"></BasicPlanItem>
        <BasicPlanItem day="4"></BasicPlanItem>
        <BasicPlanItem day="5"></BasicPlanItem>
        <BasicPlanItem day="6"></BasicPlanItem>
        <BasicPlanItem day="7"></BasicPlanItem>
     
    </ul>
</slot>

<style>
    .planList {
        padding: 0;
    }
</style>
