<script>
    import gator from '$lib/assets/gator.svg';
    import ContinueButton from "../../lib/ContinueButton.svelte";
    
</script>

<slot>
    <div class="container">
        <div class="main">
            <h1>Amazing Job!</h1>
            <img src={gator} alt="Crocodile">
            <h5>Congratulations on your first run!</h5>
            <p>You are now a part of a community of millions of people that are making a positive change on their mind and body through the simple act of running!</p>
        </div>

        <div class="nav-butts">
            <div class="continue">
                <a href="postrun/step2/">Continue</a>
            </div>
            <div class="skip">
                <a href="../home">Skip All</a>
            </div>
        </div>

    </div>
</slot>

<style>
    .container {

        background-color: var(--lavender-100);
        height: auto;
        display: flex;

        flex-direction: column;
       
       
    }

    img {
        height: 168px;
        width: 176px;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 353px;
        margin: 20px;
        padding: 150px 0px 0px 0px;

    }

    h1 {
        font-family: 'Fugaz One';
        font-size: 47.78px;
        margin: 10px;
    }

    h5 {
        font-family: 'Poppins';
        font-size: 23.04px;
        margin: 10px;
    }

    p {
        font-family: 'Poppins';
        font-size: 16px;
        margin: 10px;
    }

    /* .continue {
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
    
    /* a {
        text-decoration: none;
        font-family: 'Poppins';
        color: var(--lavender-700);
    } */
</style>