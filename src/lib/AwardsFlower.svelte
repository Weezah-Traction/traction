<script>
     import thumb from '$lib/assets/flower.svg';

     export let title = "Name";
     export let xp = "Und";
     export let date
</script>

<slot>
     <div class="achievementsFlowerContainer">
          <img class="flower" src={thumb} alt="Flower">
          <p>{title}</p>
          <p><b>{xp} XP</b></p>
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
          gap: 10px;
          flex-shrink: 0;
          align-self: stretch;
     }
</style>