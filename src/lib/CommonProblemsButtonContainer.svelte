<script>
	import CommonProblemsButton from "./CommonProblemsButton.svelte";
</script>

<slot>
     <div class="commonProblemsContainer">
          <CommonProblemsButton text="Example"></CommonProblemsButton>
          <CommonProblemsButton text="Example"></CommonProblemsButton>
          <CommonProblemsButton text="Example"></CommonProblemsButton>
     </div>
</slot>

<style>
     .commonProblemsContainer {
          display: flex;
          align-items: flex-start;
          align-content: flex-start;
          gap: 7px;
          align-self: stretch;
          flex-wrap: wrap;
     }
</style>