<script>
     export let stretch_state;

	function changeToOne(){
          stretch_state = 'stretch1';
     }
     function changeToTwo(){
          stretch_state = 'stretch2';
     }
     function changeToThree(){
          stretch_state = 'stretch3';
     }
</script>

<slot>
     <div class="stretchesRadio">
          <fieldset>          
               <input type="radio" id="one" on:click={changeToOne} name="stretches" value="one" checked />
               <input type="radio" id="two" on:click={changeToTwo} name="stretches" value="two" />
               <input type="radio" id="three" on:click={changeToThree} name="stretches" value="three" />
          </fieldset>
     </div>
</slot>

<style>
     .stretchesRadio {
          width: 100%;
          display: flex;
          justify-content: center;
     }
     fieldset {
          display: flex;
          width: 125px;
          justify-content: space-between;
          border: 0;
     }
     input {
          width: 30px;
          height: 30px;
          background-color: var(--lavender-700);
     }

</style>