<script>
    import BlankHeader from "../../../lib/BlankHeader.svelte";
</script>

<slot>
    <BlankHeader></BlankHeader>
    <div>
        <div>
            <h2>Stretches</h2>
            <p>You can find some more cooldown stretches & Recommendation to relax your body on the home screen </p>
        </div>
        <div> <!--Might need to add a gallery component here for the stretches-->
            <h2>Dynamic Leg Swings</h2>
            <img src="" alt="">
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