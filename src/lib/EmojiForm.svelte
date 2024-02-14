
<script>
	import EmojiRadioButton from "./EmojiRadioButton.svelte";
</script>



<slot> 
<div class="emojiform">
    
    <div class="emojiformtext">
        <h6>How do you emotionally feel after this run?</h6>
    </div>
       
    
    <div class="emojiContainer">
            <div class="emojiContent">

             <EmojiRadioButton type="worst"></EmojiRadioButton>
             <EmojiRadioButton type="bad"></EmojiRadioButton>
             <EmojiRadioButton type="neutral"></EmojiRadioButton>
             <EmojiRadioButton type="good"></EmojiRadioButton>
             <EmojiRadioButton type="best"></EmojiRadioButton>
             
            </div>
    

    </div>

</div>


</slot>


<style>
.emojiform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.emojiformtext {
    color: #000;
    text-align: center;

    /* Poppins/Bold/H6 */
    font-family: Poppins;
    font-size: 19.2px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.96px;
}
.emojiContainer {
          display: flex;
          width: 100%;
          justify-content: center;
     }

     .emojiContent {
          display: flex;
          justify-content: space-between;
          width: 270px;
     }



</style>