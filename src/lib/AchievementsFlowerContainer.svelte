<script>
     import flower from '$lib/assets/flower.svg';

     export let name = "Name";
     export let stat = "Stat";
</script>

<slot>
     <div class="achievementsFlowerContainer">
          <img class="flower" src={flower} alt="Flower">
          <p>{name}</p>
          <p><b>{stat}</b></p>
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