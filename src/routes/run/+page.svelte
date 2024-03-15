<script>
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import MapWidget from "$lib/MapWidget.svelte";
    import MediumWidget from "../../lib/MediumWidget.svelte";
    import RunButtons from "../../lib/RunButtons.svelte";
	import RunWidget from "../../lib/RunWidget.svelte";

    /* Fancy Timer Interactions */

    /* 7 Minutes = 1 Mile*/
    let timeSince;
    let timerMinutes;
    let timerSeconds;
    let timeReported;
    let formattedMinutes;
    let formattedSeconds;

    let pace = 0;

    let distance = 0.00;

    let startTime = new Date().getTime(); // Gets the current time
    setInterval(function() {
        let currentTime = new Date().getTime();
        timeSince = currentTime - startTime
        timerMinutes = (Math.floor((timeSince % (1000 * 60 * timeSince)) / (1000 * 60)));
        timerSeconds = (Math.floor((timeSince % (1000 * 60)) / 1000));


        formattedMinutes = timerMinutes.toLocaleString('en-US');
        formattedSeconds = timerSeconds.toLocaleString('en-US' , {minimumIntegerDigits: 2});

        timeReported = formattedMinutes + ":" + formattedSeconds;
    }, 100);
 
    setInterval(function() {
        // distance = (distance + .01).toFixed(2);
        pace = (distance / (timeSince/60000)).toFixed(2);
    }, 2500);
 


    



</script>

<slot>
    <BlankHeader></BlankHeader>
    <div class="bodyContent">
        <div class="widgetList">
            <MapWidget size="medium"></MapWidget>
            <div class="lav100"><RunWidget widgType = "distance" data = {distance}></RunWidget></div>
            <div class="lav200"><RunWidget widgType = "pace" data = {pace}></RunWidget></div>
            <div class="lav100"><RunWidget widgType = "timer" data = {timeReported}></RunWidget></div>
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
