<script>
    import gator from '$lib/assets/gator.svg';
</script>

<slot>
    <div class="container">
        <div class="main">
            <h1>Amazing Job!</h1>
            <img src={gator} alt="Crocodile">
            <h5>Congratulations on your first run!</h5>
            <p>You are now a part of a community of millions of people that are making a positive change on their mind and body through the simple act of running!</p>
        </div>
        <div class="continue">
            <a href="">Continue</a>
        </div>
    </div>
</slot>

<style>
    .container {
        background-color: var(--lavender-100);
        height: 852px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main {
        display: flex;
        flex-direction: column;
        width: 353px;
        margin: 20px;
        padding: 150px 0px 300px 0px;
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

    .continue {
        width: 353px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--lavender-300);
        border-radius: 10px;
    }
    
    a {
        text-decoration: none;
        font-family: 'Poppins';
        color: var(--lavender-700);
    }
</style>