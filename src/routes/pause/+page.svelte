<script>
    import RunButtons from "../../lib/RunButtons.svelte";
</script>

<slot>
    <div class="modal-background">
        <h2>Run Paused</h2>
        <div class="runbuttons">
            <RunButtons type="stop"></RunButtons>
            <RunButtons type="resume"></RunButtons>
        </div>
    </div>
</slot>

<style>
    h2 {
        font-family: 'Fugaz One';
        font-size: 47.78px;
        color: var(--lavender-100);
    }
    .modal-background {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #A4A4A4;
        height: 100%;
        opacity: 0.9;
    }
    .runbuttons {
        height: 120px;  
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 40px;
        position: fixed;
        bottom: 0;
    }
</style>