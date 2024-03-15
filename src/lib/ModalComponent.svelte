<script>
    import LongButton from "./LongButton.svelte";
    export let title="Are you sure you want to end your run?"; 

    let run_state = "stopped";

    function goBack(){
        run_state = "playing";
        console.log(run_state);
    }

</script>

<slot>
    <div class="modal-background">
        <div class="modal-container">
            <h4>{title}</h4>
            <input type="button" alt="No Button" id="stop" value="No" on:click={goBack} />
            <LongButton content='Yes'></LongButton>
        </div>
    </div>
</slot>

<style>

    input {
        border-radius: 10px;
        width: 100%;
        height: 48px;
        border-style: none;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
    }

    .modal-background {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #A4A4A4;
        height: 100%;
        opacity: 0.9;
        z-index: 10;
    }

    .modal-container {
        background-color: var(--lavender-100);
        height: auto;
        width: 320px;
        padding: 20px;
        border-radius: 20px;
    }

    h4 {
        font-family: 'Fugaz One';
        font-size: 27.6px;
        margin: 0;
    }

    /* p {
        margin-bottom: 20px;
    } */
</style>