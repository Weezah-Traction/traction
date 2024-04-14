<script>
     import thumb from '$lib/assets/flower.svg';
     let alt = 'Flower'

     export let name = "Record Name"
     export let stat = "Record Stat"
</script>

<slot>
     <div class="container">
     <div class="recordItem">
          <div class="flower">
               <img src={thumb} alt={alt}>
          </div>
          <div class="nameNStat">
               <p>{name}</p>
               <h6>{stat}</h6>
          </div>
     </div>
</div>
</slot>

<style>

     img {
          height: 55px;
          width: 55px;
     }

     .container{
          margin: .25em 1em;
     }


     .recordItem {
          display: flex;
          padding: 2em;
          align-items: center;
          gap: 20px;
          align-self: stretch;
          background-color: var(--lavender-200);
          color: var(--lavender-700);
          border-radius: var(--standard-radius);
     }

     .nameNStat {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 5px;
     }

</style>