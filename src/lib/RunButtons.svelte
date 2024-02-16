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
    <a href="/postrun" class={type}><img src={icon} alt={alt}></a>
</slot>

<style>
    a {
        border-style: none;
        background-color: transparent;
    }
</style>