<script>
	import EmojiRadioButton from "./EmojiRadioButton.svelte";
</script>

<slot>
     <div class="emojiContainer">
          <div class="emojiContent">
               <EmojiRadioButton type="worst"></EmojiRadioButton>
               <EmojiRadioButton type="bad"></EmojiRadioButton>
               <EmojiRadioButton type="neutral"></EmojiRadioButton>
               <EmojiRadioButton type="good"></EmojiRadioButton>
               <EmojiRadioButton type="best"></EmojiRadioButton>
          </div>
     </div>
</slot>

<style>
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