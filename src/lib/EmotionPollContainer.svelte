<script>
	import EmojiRadio from "./EmojiRadio.svelte";

</script>
<slot>
    <div>
        <h2>How Do You Feel?</h2>
        <EmojiRadio></EmojiRadio>
    </div>
</slot>

<style>
    div{
        text-align: center;
    }
</style>