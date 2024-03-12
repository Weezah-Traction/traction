<script>
    import LongButton from "./LongButton.svelte";
    export let title="Are you sure you want to end your run?"; 
    export let modalContent="textcontent";


</script>

<slot>
    <div class="modal-background">
        <div class="modal-container">
            <h4>{title}</h4>
            <p>{modalContent}</p>
            <LongButton content='No' color='default'></LongButton>
            <LongButton content='Yes'></LongButton>
        </div>
    </div>
</slot>

<style>
    .modal-background {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #A4A4A4;
        height: 100%;
        opacity: 0.9;
        z-index: 3;
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

    p {
        margin-bottom: 20px;
    }
</style>