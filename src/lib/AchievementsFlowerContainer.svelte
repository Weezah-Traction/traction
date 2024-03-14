<script>
     import thumb from '$lib/assets/flower.svg';

     export let name = "Name";
     export let xp = "Und";
</script>

<slot>
     <div class="achievementsFlowerContainer">
          <img class="flower" src={thumb} alt="Flower">
          <p>{name}</p>
          <p><b>{xp} XP</b></p>
     </div>
</slot>

<style>
     p {
          text-align: center;
     }
     .achievementsFlowerContainer {
          display: flex;
          width: 100px;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          flex-shrink: 0;
          align-self: stretch;
     }
</style>