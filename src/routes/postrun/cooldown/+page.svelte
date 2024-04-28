<script>
    import BlankHeader from "../../../lib/BlankHeader.svelte";

    import stretchImg from '$lib/assets/stretch1.svg';
    import stretchImg1 from '$lib/assets/stretch1.svg';
    import stretchImg2 from '$lib/assets/stretch2.svg';
    import stretchImg3 from '$lib/assets/stretch3.svg';

	import PostrunButtons from "../../../lib/PostrunButtons.svelte";

	import StretchesRadio from "../../../lib/StretchesRadio.svelte";

    let stretch_state = "stretch1";
</script>

<slot>
    <BlankHeader page="cooldown"></BlankHeader>
    <div class="bodyContent">
        <!-- <div class="desc">
            <p>You can find more cooldown stretches on the Plans screen!</p>
        </div> -->
        <StretchesRadio bind:stretch_state></StretchesRadio>
            {#if (stretch_state == 'stretch1')}

                <div class="stretchContent"> <!--Might need to add a gallery component here for the stretches-->
                    <h2>Side Lunges</h2>
                    <img src={stretchImg1} alt="Stretch">
                    <div class="stretchDesc">
                        <p>Begin by standing with feet shoulder-width apart, then take a wide step to the side, bending one knee while keeping the other leg straight. Shift your weight onto the bent leg, feeling a stretch in your inner thigh. Alternate sides, ensuring smooth, controlled movements to prepare your muscles for a dynamic run.</p>
                    </div>
                </div>

            {:else if (stretch_state == 'stretch2')}

                <div class="stretchContent"> <!--Might need to add a gallery component here for the stretches-->
                    <h2>Quad Stretch</h2>
                    <img src={stretchImg2} alt="Stretch">
                    <div class="stretchDesc">
                        <p>While standing or lying on one side, bend one knee and bring your foot towards your buttocks. Gently pull your foot closer with your hand, feeling a stretch along the front of your thigh.</p>
                    </div>
                </div>

            {:else if (stretch_state == 'stretch3')}

            <div class="stretchContent"> <!--Might need to add a gallery component here for the stretches-->
                <h2>Lateral Leg Swings</h2>
                <img src={stretchImg3} alt="Stretch">
                <div class="stretchDesc">
                    <p>Stand with your side facing a support, like a wall or pole, for stability. Swing one leg sideways in a controlled manner, crossing in front of your body and then swinging it back out to the side.</p>
                </div>
            </div>

            {/if}
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

    .stretchDesc {
        display: flex;
        width: 353px;
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