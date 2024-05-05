<script>
     let thumb;
     export let flowerType;

     // Flower thumbs

     import clockBlue from '$lib/assets/flowers/blue/Clock_Blue.svg';
     import crownBlue from '$lib/assets/flowers/blue/Crown_Blue.svg';
     import fireBlue from '$lib/assets/flowers/blue/Fire_Blue.svg';
     import saplingBlue from '$lib/assets/flowers/blue/Sapling_Blue.svg';
     import shoeBlue from '$lib/assets/flowers/blue/Shoe_Blue.svg';

     import clockOrange from '$lib/assets/flowers/orange/Clock_Orange.svg';
     import crownOrange from '$lib/assets/flowers/orange/Crown_Orange.svg';
     import fireOrange from '$lib/assets/flowers/orange/Fire_Orange.svg';
     import saplingOrange from '$lib/assets/flowers/orange/Sapling_Orange.svg';
     import shoeOrange from '$lib/assets/flowers/orange/Shoe_Orange.svg';

     import clockPurple from '$lib/assets/flowers/purple/Clock_Purple.svg';
     import crownPurple from '$lib/assets/flowers/purple/Crown_Purple.svg';
     import firePurple from '$lib/assets/flowers/purple/Fire_Purple.svg';
     import saplingPurple from '$lib/assets/flowers/purple/Sapling_Purple.svg';
     import shoePurple from '$lib/assets/flowers/purple/Shoe_Purple.svg';

     import clockRed from '$lib/assets/flowers/red/Clock_Red.svg';
     import crownRed from '$lib/assets/flowers/red/Crown_Red.svg';
     import fireRed from '$lib/assets/flowers/red/Fire_Red.svg';
     import saplingRed from '$lib/assets/flowers/red/Sapling_Red.svg';
     import shoeRed from '$lib/assets/flowers/red/Shoe_Red.svg';

     if (flowerType == 'clockBlue'){
          thumb = clockBlue;
     }
     if (flowerType == 'crownBlue'){
          thumb = crownBlue;
     }
     if (flowerType == 'fireBlue'){
          thumb = fireBlue;
     }
     if (flowerType == 'saplingBlue'){
          thumb = saplingBlue;
     }
     if (flowerType == 'shoeBlue'){
          thumb = shoeBlue;
     }

     if (flowerType == 'clockOrange'){
          thumb = clockOrange;
     }
     if (flowerType == 'crownOrange'){
          thumb = crownOrange;
     }
     if (flowerType == 'fireOrange'){
          thumb = fireOrange;
     }
     if (flowerType == 'saplingOrange'){
          thumb = saplingOrange;
     }
     if (flowerType == 'shoeOrange'){
          thumb = shoeOrange;
     }

     if (flowerType == 'clockPurple'){
          thumb = clockPurple;
     }
     if (flowerType == 'crownPurple'){
          thumb = crownPurple;
     }
     if (flowerType == 'firePurple'){
          thumb = firePurple;
     }
     if (flowerType == 'saplingPurple'){
          thumb = saplingPurple;
     }
     if (flowerType == 'shoePurple'){
          thumb = shoePurple;
     }

     if (flowerType == 'clockRed'){
          thumb = clockRed;
     }
     if (flowerType == 'crownRed'){
          thumb = crownRed;
     }
     if (flowerType == 'fireRed'){
          thumb = fireRed;
     }
     if (flowerType == 'saplingRed'){
          thumb = saplingRed;
     }
     if (flowerType == 'shoeRed'){
          thumb = shoeRed;
     }


     export let name = "Name";
     export let xp = "Und";
     export let date = "";
</script>

<slot>
     <div class="achievementsFlowerContainer">
          <img class="flower" src={thumb} alt="Flower">
          <p>{name}</p>
          <div>
          <p><b>{xp}</b></p>
          <p>{date}</p>
          </div>
     </div>
</slot>

<style>
     p {
          text-align: center;
     }

     .flower{
          background-color: #ffffff;
          width: 5em;
     }

     .achievementsFlowerContainer {
          display: flex;
     
     
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          flex-shrink: 0;
          align-self: stretch;
          padding: 20px .25em;
          border-radius: var(--standard-radius);
     }
</style>