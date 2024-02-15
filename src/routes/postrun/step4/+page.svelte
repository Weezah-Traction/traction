<script>
    import BlankHeader from "../../../lib/BlankHeader.svelte";
</script>

<slot>
    <BlankHeader></BlankHeader>
    <div class="container">
        <div>
            <h2>Stretches</h2>
            <p>You can find some more cooldown stretches & Recommendation to relax your body on the home screen </p>
        </div>
        <div> <!--Might need to add a gallery component here for the stretches-->
            <h2>Dynamic Leg Swings</h2>
            <img src="" alt="Gif image">
        </div>
        <div class="continue">
            <a href="">Continue</a>
        </div>
    </div>
</slot>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .continue {
        width: 353px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--lavender-300);
        border-radius: 10px;
        margin: 0px 0px 55px 0px;
        position: absolute; bottom: 0;
    }

    h2 {
        font-family: 'Fugaz One';
    }
</style>