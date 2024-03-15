<script>
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import MapWidget from "$lib/MapWidget.svelte";
    import MediumWidget from "../../lib/MediumWidget.svelte";
    import RunButtons from "../../lib/RunButtons.svelte";
	import RunWidget from "../../lib/RunWidget.svelte";
</script>

<slot>
    <BlankHeader></BlankHeader>
    <div class="bodyContent">
        <div class="widgetList">
            <MapWidget size="medium"></MapWidget>
            <div class="lav100"><RunWidget widgType = "distance" data = "0.00"></RunWidget></div>
            <div class="lav200"><RunWidget widgType = "pace" data = "0.00"></RunWidget></div>
            <div class="lav100"><RunWidget widgType = "timer" data = "0:00"></RunWidget></div>
            <div class="lav200"><RunWidget widgType = "c25k" data = "WALK"></RunWidget></div>
        </div>

        <div class="runbuttons">
            <RunButtons type="stop"></RunButtons>
            <RunButtons type="pause"></RunButtons>
        </div>
    </div>
</slot>

<style>
    .bodyContent {
        margin: 0;
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
