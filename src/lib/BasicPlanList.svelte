<script>
        import BasicPlanItemSmall from '$lib/BasicPlanItemSmall.svelte';
</script>

<slot>
    <ul class="planList">
        
      
     <div class="lav300">
        <BasicPlanItemSmall day="1"></BasicPlanItemSmall>
        <BasicPlanItemSmall day="3"></BasicPlanItemSmall>
        <BasicPlanItemSmall day="5"></BasicPlanItemSmall>
        <BasicPlanItemSmall day="7"></BasicPlanItemSmall>
     </div>   


     <div class="lav100">
        <BasicPlanItemSmall day="2"></BasicPlanItemSmall>
        <BasicPlanItemSmall day="4"></BasicPlanItemSmall>
        <BasicPlanItemSmall day="6"></BasicPlanItemSmall>
     </div>


    </ul>
</slot>


<style>
    .lav300 {
        background-color: var(--Lavender-300);
    }

    .lav100 {
        background-color: var(--Lavender-100);
    }

</style>
