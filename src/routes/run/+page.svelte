<script>
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import MapWidget from "$lib/MapWidget.svelte";
    import SmallestWidget from "$lib/SmallestWidget.svelte";
    import RunButtons from "../../lib/RunButtons.svelte";
</script>

<BlankHeader></BlankHeader>
<MapWidget size="large"></MapWidget>
<SmallestWidget></SmallestWidget>
<SmallestWidget></SmallestWidget>
<RunButtons type="stop"></RunButtons>
<RunButtons type="pause"></RunButtons>
