<script>
export let page = 'run';
let header;

if (page == 'run'){
    header = 'Run';
}

if (page == 'home'){
        header = 'Home';
    }

if (page == 'postrun'){
    header = 'Cooldown';
}

if (page == 'activity'){
    header = 'Summary';
}

if (page == 'achievements'){
    header = 'Summary';
}

if (page == 'plans'){
    header = 'Plans';
}

if (page == 'checkup'){
    header = 'Check-Up';
}

if (page == 'cooldown'){
    header = 'Stretches';
}

if (page == 'guidance'){
    header = 'Guidance';
}

</script>

<slot>
    <div class="container">
        <div class="headerText">
            <h1 class="headerPageTitle">{header}</h1>
        </div>
    </div> 
</slot>

<style>
    .container {
        position: sticky;
        font-family: 'Poppins';
        background-color:  var(--lavender-100);
        display: flex;
        top: 0;
        justify-content: space-between;
        align-items: flex-end;
        max-width: 100%;
        height: 120px;
        z-index: 1;
    }

    .headerText {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        color: var(--lavender-700);
        height: 50px;
    }

    .headerPageTitle {
        margin: 0;
        font-family: 'Fugaz One';
    }
</style>