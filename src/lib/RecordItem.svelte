<script>
     import thumb from '$lib/assets/flower.svg';
     let alt = 'Flower'

     export let name = "Record Name"
     export let stat = "Record Stat"
</script>

<slot>
     <div class="recordItem">
          <div class="flower">
               <img src={thumb} alt={alt}>
          </div>
          <div class="nameNStat">
               <p>{name}</p>
               <h6>{stat}</h6>
          </div>
     </div>
</slot>

<style>

     img {
          height: 55px;
          width: 55px;
     }
     .recordItem {
          display: flex;
          height: 100px;
          padding: 0px 20px;
          align-items: center;
          gap: 20px;
          align-self: stretch;
     }

     .nameNStat {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 5px;
     }

</style>