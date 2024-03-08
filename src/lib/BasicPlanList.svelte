<script>
        import BasicPlanItemSmall from '$lib/BasicPlanItemSmall.svelte';
</script>

<slot>
    <ul class="planList"> 
        <div class="lav300"><BasicPlanItemSmall day="1"></BasicPlanItemSmall></div>
        <div class="lav100"><BasicPlanItemSmall day="2"></BasicPlanItemSmall></div>
        <div class="lav300"><BasicPlanItemSmall day="3"></BasicPlanItemSmall></div>
        <div class="lav100"><BasicPlanItemSmall day="4"></BasicPlanItemSmall></div> 
        <div class="lav300"><BasicPlanItemSmall day="5"></BasicPlanItemSmall></div>
        <div class="lav100"><BasicPlanItemSmall day="6"></BasicPlanItemSmall></div> 
        <div class="lav300"><BasicPlanItemSmall day="7"></BasicPlanItemSmall></div> 
    </ul>
</slot>