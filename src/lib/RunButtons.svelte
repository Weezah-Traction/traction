<script>
    // export let type = 'Type'; // Declares the property
    let icon;

    import stopIcon from '$lib/assets/Stop_Button.svg';
    import pauseIcon from '$lib/assets/Pause_Button.svg';
    import resumeIcon from '$lib/assets/Resume_Button.svg';
    
    let alt = "Alt Text";
    let link = "/postrun";
    
    // if (type == "resume"){
    //     alt = "Resume Button"
    //     link = "/run"
    //     icon = resumeIcon;
    // }

    // if (type == "stop"){
    //     alt = "Stop Button"
    //     link = "/end"
    //     icon = stopIcon;
    // }

    // if (type == "pause"){
    //     alt = "Pause Button"
    //     link = "/pause"
    //     icon = pauseIcon;
    // }

    export let run_state;

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

</script>

<slot>
    <!-- <a href={link} class={type}><img src={icon} alt={alt}></a> -->
    <form>
        <input type="image" src={stopIcon} alt="Stop Button" id="stop" on:click={stopIt} />
        <!-- <label class="tab" for="stop">Stop</label> -->
        <input type="image" src={pauseIcon} alt="Pause Button" id="pause" on:click={pauseIt}  />
        <!-- <label class="tab" for="pause">Pause</label> -->
    </form>
</slot>

<style>
    /* a {
        border-style: none;
        background-color: transparent;
    } */

    form {
        height: 120px;  
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 40px;
        position: fixed;
        bottom: 0;
        z-index: 20;
    }

    input[type="image"] {
		& + label {
			color: var(--lavender-700);
			& > .notification {
				background-color: var(--lavender-700);
				color: #fff;
			}
		}
    }

</style>