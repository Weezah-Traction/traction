<script>
	import CommonProblemsButton from "./CommonProblemsButton.svelte";
</script>

<slot>
     <div class="commonProblemsContainer">
          <CommonProblemsButton type="1"></CommonProblemsButton>
          <CommonProblemsButton type="2"></CommonProblemsButton>
          <CommonProblemsButton type="3"></CommonProblemsButton>
          <CommonProblemsButton type="4"></CommonProblemsButton>
          <CommonProblemsButton type="5"></CommonProblemsButton>
          <CommonProblemsButton type="6"></CommonProblemsButton>
          <CommonProblemsButton type="7"></CommonProblemsButton>
          <CommonProblemsButton type="8"></CommonProblemsButton>
          <CommonProblemsButton type="9"></CommonProblemsButton>
          <CommonProblemsButton type="10"></CommonProblemsButton>
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