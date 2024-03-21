<script>
    import BlankHeader from "../../../lib/BlankHeader.svelte";

    import stretchImg from '$lib/assets/stretch1.svg'; /* Replace with actual stretch image later*/
	import PostrunButtons from "../../../lib/PostrunButtons.svelte";

	import StretchesRadio from "../../../lib/StretchesRadio.svelte";
</script>

<slot>
    <BlankHeader page="cooldown"></BlankHeader>
    <div class="bodyContent">
            <div class="desc">
                <p>You can find more cooldown stretches on the Plans screen!</p>
            </div>
            <div class="stretchContent"> <!--Might need to add a gallery component here for the stretches-->
                <h2>Dynamic Leg Swings</h2>
                <img src={stretchImg} alt="Stretch">
                <StretchesRadio></StretchesRadio>
            </div>
            <PostrunButtons page="cooldown"></PostrunButtons>
    </div>
</slot>

<style>
    .desc {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;
    }
    .stretchContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    h2 {
        font-family: 'Fugaz One';
    }

    img {
        width: 250px;
        height: 215px;
    }
</style>