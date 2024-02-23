<script>
    import BlankHeader from "$lib/BlankHeader.svelte";
    import EmojiRadio from "$lib/EmojiRadio.svelte";

</script>

<slot>
    <BlankHeader></BlankHeader>
    <div class="container">
        <div>
            <h6>How do you emotionally feel after this run?</h6>
            <EmojiRadio></EmojiRadio>
        </div>
        <div>
            <h6>Select any issues you dealt with on this run.</h6>
        </div>
        <!-- <div>
            <h6>How do you feel about your physical stress levels?</h6>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            </div>
        </div> -->
        <div class="nav-butts">
            <div class="continue">
                <a href="">Continue</a>
            </div>
            <div class="skip">
                <a href="">Skip All</a>
            </div>
        </div>
    </div>
</slot>

<style>
    .container {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
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

    h6 {
        font-family: 'Poppins';
        font-size: 19.2px;
    }

    /* .slidecontainer {
        width: 100%;
    }

    .slider {
        -webkit-appearance: none; 
        appearance: none;
        width: 100%;
        height: 10px; 
        background: var(--lavender-100); 
        outline: none; 
        opacity: 0.7; 
        -webkit-transition: .2s; 
        transition: opacity .2s;
    }

    .slider:hover {
        opacity: 1;
    } */

    /* .slider::-webkit-slider-thumb {
        -webkit-appearance: none; 
        appearance: none;
        width: 48px; 
        height: 48px;
        background: var(--lavender-500); 
        cursor: pointer;
        border-radius: 100px;
    } */
</style>