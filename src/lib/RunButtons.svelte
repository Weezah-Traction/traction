<script>
    export let type = 'Type'; // Declares the property
    let icon;

    import stopIcon from '$lib/assets/btnStop.svg';
    import pauseIcon from '$lib/assets/btnPause.svg';
    
    let alt = "Alt Text";

    if (type == "stop"){
        alt = "Stop Button"
        icon = stopIcon;
    }

    if (type == "pause"){
        alt = "Pause Button"
        icon = pauseIcon;
    }

</script>

<slot>
    <button class={type}><img src={icon} alt={alt}></button>
</slot>

<style>
    button {
        border-style: none;
        background-color: transparent;
    }
</style>