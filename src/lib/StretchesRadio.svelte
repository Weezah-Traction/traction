<script>

</script>

<slot>
     <div class="stretchesRadio">
          <fieldset>          
               <input type="radio" id="one" name="stretches" value="one" checked />
               <input type="radio" id="two" name="stretches" value="two" />
               <input type="radio" id="three" name="stretches" value="three" />
          </fieldset>
     </div>
</slot>

<style>
     .stretchesRadio {
          width: 393px;
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