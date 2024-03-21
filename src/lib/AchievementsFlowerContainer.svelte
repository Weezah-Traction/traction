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
          width: 100px;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          flex-shrink: 0;
          align-self: stretch;
     }
</style>