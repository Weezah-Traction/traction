<script>
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import MapWidget from "$lib/MapWidget.svelte";
    import MediumWidget from "../../lib/MediumWidget.svelte";
    import RunButtons from "../../lib/RunButtons.svelte";
</script>
<slot>
<BlankHeader></BlankHeader>
<MapWidget size="medium"></MapWidget>
<MediumWidget widgetType = currentPace></MediumWidget>
<MediumWidget widgetType = distanceCovered></MediumWidget>
<MediumWidget widgetType = elevationGain></MediumWidget>
<MediumWidget widgetType = time></MediumWidget>

<div class="runbuttons">
    <RunButtons type="stop"></RunButtons>
    <RunButtons type="pause"></RunButtons>
</div>

</slot>

<style>
    .runbuttons {
        height: 120px;  
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 40px;
        
    }
</style>
