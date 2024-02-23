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
        <div class="nav-butts">
            <div class="continue">
                <a href="../../home/">Continue</a>
            </div>
            <div class="skip">
                <a href="../../home/">Skip All</a>
            </div>
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
        margin: 0px 0px 15px 0px;
        text-decoration: none;
    }

    .continue a {
        text-decoration: none;
        font-family: 'Poppins';
        color: var(--lavender-700);
    }

    .skip {
        width: 353px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--lavender-200);
        border-radius: 10px;
        margin: 0px 0px 55px 0px;
    }

    .skip a {
        color: var(--lavender-700);
        text-decoration: none;
        font-family: 'Poppins';
    }

    .nav-butts {
        position: absolute; bottom: 0;
    }

    h2 {
        font-family: 'Fugaz One';
    }
</style>