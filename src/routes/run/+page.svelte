<script>
    import BlankHeader from "../../lib/BlankHeader.svelte";
    import MapWidget from "$lib/MapWidget.svelte";
    import MediumWidget from "../../lib/MediumWidget.svelte";
    import RunButtons from "../../lib/RunButtons.svelte";
	import RunWidget from "../../lib/RunWidget.svelte";
    import ModalComponent from "../../lib/ModalComponent.svelte";
    import LongButton from "../../lib/LongButton.svelte";

    let run_state = "playing";

    /* Fancy Timer Interactions */

    /* 7 Minutes = 1 Mile*/

    let c25kStatus;

    let timeSince;
    let timerMinutes;
    let timerSeconds;
    let timeReported;
    let formattedMinutes;
    let formattedSeconds;

    let paused = false;

    let pausedTimeSince;
    let pausedTimerMinutes;
    let pausedTimerSeconds;
    let pausedTimeReported;
    let pausedFormattedMinutes;
    let pausedFormattedSeconds;

    let pace = 0;
    let distance = 0.00;

    let startTime = new Date().getTime(); // Gets the current time
    setInterval(function() {
        updateTimer();
        // let currentTime = new Date().getTime();
        // timeSince = currentTime - startTime;
        // timerMinutes = (Math.floor((timeSince % (1000 * 60 * timeSince)) / (1000 * 60)));
        // timerSeconds = (Math.floor((timeSince % (1000 * 60)) / 1000));


        // formattedMinutes = timerMinutes.toLocaleString('en-US');
        // formattedSeconds = timerSeconds.toLocaleString('en-US' , {minimumIntegerDigits: 2});

        // timeReported = formattedMinutes + ":" + formattedSeconds;
        // // console.log(timeSince);
        
    }, 100);
 
    setInterval(function() {
        // console.log(distance);
        distance= (parseFloat(distance) + .01).toFixed(2);
        // console.log(distance);
        pace = (distance / (timeSince/60000)).toFixed(2);
    }, 2500);


    // let pausedStartTime = new Date().getTime(); // WHEN PAUSED, Gets the current time
    // setInterval(function() {
    //     let pausedTime = new Date().getTime();
    //     pausedTimeSince = pausedTime - pausedStartTime;
    //     pausedTimerMinutes = (Math.floor((pausedTimeSince % (1000 * 60 * pausedTimeSince)) / (1000 * 60)));
    //     pausedTimerSeconds = (Math.floor((pausedTimeSince % (1000 * 60)) / 1000));


    //     pausedFormattedMinutes = pausedTimerMinutes.toLocaleString('en-US');
    //     pausedFormattedSeconds = pausedTimerSeconds.toLocaleString('en-US' , {minimumIntegerDigits: 2});

    //     pausedtimeReported = pausedFormattedMinutes + ":" + pausedFormattedSeconds;
    //     // console.log(timeSince);
        
    // }, 100);

    function updateTimer(){
        let currentTime = new Date().getTime();
        if(run_state == 'playing'){
            timeSince = currentTime - startTime;
        }
        else{
            startTime += 100;
        }
        printTimer(timeSince);
        // timerMinutes = (Math.floor((timeSince % (1000 * 60 * timeSince)) / (1000 * 60)));
        // timerSeconds = (Math.floor((timeSince % (1000 * 60)) / 1000));


        // formattedMinutes = timerMinutes.toLocaleString('en-US');
        // formattedSeconds = timerSeconds.toLocaleString('en-US' , {minimumIntegerDigits: 2});

        // timeReported = formattedMinutes + ":" + formattedSeconds;
        // // console.log(timeSince);
    }

    function printTimer(time){
        timerMinutes = (Math.floor((timeSince % (1000 * 60 * timeSince)) / (1000 * 60)));
        timerSeconds = (Math.floor((timeSince % (1000 * 60)) / 1000));


        formattedMinutes = timerMinutes.toLocaleString('en-US');
        formattedSeconds = timerSeconds.toLocaleString('en-US' , {minimumIntegerDigits: 2});

        timeReported = formattedMinutes + ":" + formattedSeconds;
        // console.log(timeSince);
    }

// Pause play buttons

    function pauseIt(){
        if (run_state == 'playing'){
            run_state = 'pausing';
            console.log(run_state);
        } 
        else if (run_state == 'pausing'){
            run_state = 'playing';
            console.log(run_state);
        }
    }

    function stopIt(){
        if (run_state == 'playing'){
            run_state = 'stopping';
            console.log(run_state);
        } 
        else if (run_state == 'pausing'){
            run_state = 'stopping';
            console.log(run_state);
        } 
        else if (run_state == 'stopping'){
            run_state = 'playing';
            console.log(run_state);
        }
        else {
            run_state = "stopping";
        }
    }

    // Walk/Run C25k functionality

    c25kStatus = "RUN";

    setInterval(changeWalkRun, 30000);

    function changeWalkRun() {
        if (c25kStatus == "WALK"){
            c25kStatus = "RUN";
        }
        else if (c25kStatus == "RUN"){
            c25kStatus = "WALK";
        }
    }

</script>

<slot>
    <BlankHeader></BlankHeader>
    <RunButtons bind:run_state></RunButtons>
    {#if (run_state == 'stopping')}
        <div class="modal-background">
            <div class="modal-container">
                <h4>Are you sure you want to end your run?</h4>
                <input type="button" alt="No Button" id="stop" value="No" on:click={stopIt} />
                <LongButton content='Yes'></LongButton>
            </div>
        </div>
    {:else if (run_state == 'pausing')}
        <div class="modal-background">
            <h2>Run Paused</h2>
        </div>
    {:else}
    <div class="bodyContent">
        <div class="widgetList">
            <MapWidget size="medium"></MapWidget>
            <div><RunWidget widgType = "distance" data = {distance}></RunWidget></div>
            <div><RunWidget widgType = "pace" data = {pace}></RunWidget></div>
            <div><RunWidget widgType = "timer" data = {timeReported}></RunWidget></div>
            <div><RunWidget widgType = "c25k" data = {c25kStatus}></RunWidget></div>
        </div>
        <!-- <PauseButton></PauseButton>
        <StopButton></StopButton> -->
    </div>
    {/if}

</slot>

<style>
    .bodyContent {
        margin: 0;
    }
    /* .runbuttons {
        height: 120px;  
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 40px;
        position: fixed;
        bottom: 0;
    } */

    input[type="button"] {
        border-radius: 10px;
        width: 100%;
        height: 48px;
        border-style: none;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
        color: var(--lavender-700);
        background-color: var(--lavender-200);
    }

    .modal-background {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--lavender-500);
        height: 100%;
        width: 100vw;
        opacity: 0.9;
        position: absolute;
    }

    .modal-container {
        background-color: var(--lavender-100);
        height: auto;
        width: 320px;
        padding: 20px;
        border-radius: 20px;
        margin-bottom: 20vh;
        z-index: 15;
    }

    h4 {
        text-align: center;
        font-size: 27.6px;
        margin: 1em .1em;
        color: var(--lavender-700)
    }

    h2 {
        color: white;
        margin-bottom: 20vh;
    }
</style>
