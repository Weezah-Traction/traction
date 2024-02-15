<script>
    import BlankHeader from "$lib/BlankHeader.svelte";
    import EmojiRadio from "$lib/EmojiRadio.svelte";
</script>

<slot>
    <BlankHeader></BlankHeader>
    <div>
        <div>
            <h6>How do you emotionally feel after this run?</h6>
            <EmojiRadio></EmojiRadio>
        </div>
        <div>
            <h6>How do you feel about your physical stress levels?</h6>
        </div>
        <div class="continue">
            <a href="">Continue</a>
        </div>
    </div>
    
</slot>

<style>
    .continue {
        width: 353px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--lavender-300);
        border-radius: 10px;
    }
</style>