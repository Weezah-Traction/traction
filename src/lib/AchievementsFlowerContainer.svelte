<script>
     import thumb from '$lib/assets/flower.svg';

     export let name = "Name";
     export let xp = "Und";
     export let date = "";
</script>

<slot>
     <div class="achievementsFlowerContainer">
          <img class="flower" src={thumb} alt="Flower">
          <p>{name}</p>
          <p><b>{xp}</b></p>
          <p>{date}</p>
     </div>
</slot>

<style>
     p {
          text-align: center;
     }
     .achievementsFlowerContainer {
          display: flex;
          min-width: 6.25em;
          min-height: 8.75em;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          flex-shrink: 0;
          align-self: stretch;
          padding: 20px .25em;
          border-radius: var(--standard-radius);
          background-color: var(--level-1);
     }
</style>