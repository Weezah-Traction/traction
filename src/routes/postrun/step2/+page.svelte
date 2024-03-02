<script>

</script>

<slot>
    <div class="bodyContent">
        <div class="container">
            <div class="container-post">
                <img src="" alt="Reward Flower">
                <h1>Woohoo! Level Up!</h1>
                <div class="container-post-1">
                    <h2>1</h2>
                    <h2>Day</h2>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-header">
                    <h2>New Runner</h2>
                    <img src="" alt="Reward Flower">
                </div>
                <div>
                    <p>320 XP</p>
                </div>
            </div>
            <div class="nav-butts">
                <div class="continue">
                    <a href="/postrun/step3">Continue</a>
                </div>
                <div class="skip">
                    <a href="../">Skip All</a>
                </div>
            </div>
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

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container-post {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container-post-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin: 0;
    }

    .progress-bar {
        width: 100%;
        background-color: #FFE5C6;
        display: flex;
    }
</style>